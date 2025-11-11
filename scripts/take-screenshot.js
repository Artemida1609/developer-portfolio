import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const url = 'http://localhost:5173/developer-portfolio/';
const screenshotsDir = join(__dirname, '..', 'screenshots');
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const screenshotPath = join(screenshotsDir, `screenshot-${timestamp}.png`);

// Створюємо папку screenshots, якщо її немає
if (!existsSync(screenshotsDir)) {
  mkdirSync(screenshotsDir, { recursive: true });
}

async function takeScreenshot() {
  let browser;
  try {
    console.log('Запускаю браузер...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Встановлюємо розмір вікна
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log(`Переходжу на сторінку: ${url}`);
    await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Чекаємо трохи, щоб все завантажилося
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(`Роблю скріншот...`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    console.log(`✅ Скріншот збережено: ${screenshotPath}`);
    return screenshotPath;
  } catch (error) {
    console.error('❌ Помилка при створенні скріншота:', error.message);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

takeScreenshot()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

