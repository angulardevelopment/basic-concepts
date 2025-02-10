const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/basic/browser/runtime.js',
        './dist/basic/browser/polyfills.js',
        // './dist/basic/browser/es2015-polyfills.js',
        // './dist/basic/browser/scripts.js',
        './dist/basic/browser/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/news-widget.js');
}
build();