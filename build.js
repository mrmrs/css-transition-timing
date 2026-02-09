const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const srcFile = path.join(__dirname, 'src', 'transition-timing.css');
const distDir = path.join(__dirname, 'dist');

// Read source
const source = fs.readFileSync(srcFile, 'utf8');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Unminified — just normalize formatting
const { code: unminified } = transform({
  filename: 'transition-timing.css',
  code: Buffer.from(source),
  minify: false,
});

fs.writeFileSync(path.join(distDir, 'transition-timing.css'), unminified);

// Minified
const { code: minified } = transform({
  filename: 'transition-timing.css',
  code: Buffer.from(source),
  minify: true,
});

fs.writeFileSync(path.join(distDir, 'transition-timing.min.css'), minified);

console.log('Build complete:');
console.log(`  dist/transition-timing.css     ${unminified.length} bytes`);
console.log(`  dist/transition-timing.min.css ${minified.length} bytes`);
