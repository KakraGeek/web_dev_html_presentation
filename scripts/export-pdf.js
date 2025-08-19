import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function exportPDF() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Load the presentation
    await page.goto('http://localhost:3000?print-pdf', {
      waitUntil: 'networkidle0'
    });

    // Wait for Reveal.js to initialize
    await page.waitForSelector('.reveal', { timeout: 10000 });

    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    });

    // Save PDF
    const fs = await import('fs');
    const outputPath = join(__dirname, '..', 'portfolio-presentation.pdf');
    fs.writeFileSync(outputPath, pdf);
    
    console.log(`✅ PDF exported successfully to: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error exporting PDF:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

exportPDF();
