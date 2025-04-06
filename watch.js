require('dotenv').config(); // <- to wczytuje .env
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');
const os = require('os');

const extensions = (process.env.WATCH_EXTENSIONS || 'php,css,js').split(',');
const port = process.env.PORT || 9222;

// 🔧 Podajesz tylko domenę, a reszta składa się automatycznie
const domain = process.env.DOMAIN 

const watchDir = path.join(os.tmpdir());

async function startWatcher() {
  const browser = await puppeteer.connect({
    browserURL: `http://localhost:${port}`,
    defaultViewport: null
  });

  const pages = await browser.pages();
  const matchingPages = pages.filter(p => p.url().includes(domain));

  if (matchingPages.length === 0) {
    console.error(`❌ Nie znaleziono żadnych zakładek z "${domain}"`);
    process.exit(1);
  }

  console.log(`👀 Nasłuchuję zmiany w: ${watchDir}`);
  console.log(`🌐 Zakładki do odświeżenia:`);
  matchingPages.forEach(p => console.log(` → ${p.url()}`));

  fs.watch(watchDir, { recursive: true }, async (eventType, filename) => {
    
    await delay(500); // properly waits 500ms
    
    if (
      filename &&
      extensions.some(ext => filename.toLowerCase().endsWith(`.${ext}`))
    ) {
      console.log(`🔁 Zmieniono: ${filename}`);
      for (const page of matchingPages) {
        try {
          await page.reload({ waitUntil: ['domcontentloaded'] });
          console.log(`✅ Odświeżono: ${page.url()}`);
        } catch (err) {
          console.error(`❌ Błąd przy ${page.url()}:`, err);
        }
      }
    }
  });
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

startWatcher();
