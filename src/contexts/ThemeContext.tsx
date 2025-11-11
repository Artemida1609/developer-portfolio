import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
	theme: Theme
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() => {
		// Check localStorage first
		if (typeof window !== 'undefined' && window.localStorage) {
			const savedTheme = localStorage.getItem('theme')
			if (savedTheme === 'dark' || savedTheme === 'light') {
				return savedTheme as Theme
			}
		}
		// If no saved theme, check system preference
		if (typeof window !== 'undefined' && window.matchMedia) {
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		}
		// Default to light if neither is available
		return 'light'
	})

	// Update DOM and localStorage when theme changes
	useEffect(() => {
		const root = document.documentElement
		
		if (theme === 'dark') {
			root.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			root.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [theme])

	const toggleTheme = () => {
		// Просто змінюємо state - useEffect відповідає за DOM та localStorage
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}

