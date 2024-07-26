const fs = require('fs');
const path = require('path');

const from = path.resolve(__dirname, '404.html');
const to = path.resolve(__dirname, 'dist', '404.html');

fs.copyFileSync(from, to);
console.log('Copied 404.html to dist folder');