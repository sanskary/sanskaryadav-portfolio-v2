const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = path.resolve('public/cv/cv-template.html');
const pdfPath = path.resolve('public/cv/sanskar-yadav-cv.pdf');

console.log('Generating PDF from:', htmlPath);
console.log('Target PDF:', pdfPath);

// Chrome headless print to PDF command
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
const cmd = `"${chromePath}" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw --print-to-pdf="${pdfPath}" "${fileUrl}"`;

console.log('Executing Chrome headless...');
execSync(cmd, { stdio: 'inherit' });

console.log('PDF generated successfully.');
const stat = fs.statSync(pdfPath);
console.log('PDF file size:', (stat.size / 1024).toFixed(2), 'KB');

const buf = fs.readFileSync(pdfPath);
new PDFParse(new Uint8Array(buf)).getText().then(data => {
  console.log('==============================================');
  console.log('PDF VERIFICATION RESULTS');
  console.log('==============================================');
  console.log('Total Pages:', data.pages.length);
  data.pages.forEach((p, idx) => {
    console.log(`\n--- PAGE ${idx + 1} (${p.text.trim().length} chars) ---`);
    console.log(p.text.trim());
  });
  if (data.pages.length === 2) {
    console.log('\n[PASS] Exactly 2 A4 pages verified.');
  } else {
    console.log(`\n[FAIL] Expected 2 pages, got ${data.pages.length} pages.`);
  }
}).catch(console.error);
