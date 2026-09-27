const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = path.resolve('public/cv/cv-template.html');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

const out1 = path.resolve('public/cv/cv-page-1.png');
const out2 = path.resolve('public/cv/cv-page-2.png');

console.log('Capturing screenshots of CV pages for visual QA...');
const cmd = `"${chromePath}" --headless=new --disable-gpu --window-size=794,2246 --screenshot="${path.resolve('public/cv/cv-full.png')}" "${fileUrl}"`;
execSync(cmd, { stdio: 'inherit' });
console.log('CV screenshot captured at public/cv/cv-full.png');
