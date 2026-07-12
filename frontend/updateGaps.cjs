const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        if (fs.statSync(dirFile).isDirectory()) {
            filelist = walkSync(dirFile, filelist);
        } else if (dirFile.endsWith('.tsx')) {
            filelist.push(dirFile);
        }
    });
    return filelist;
};

const pagesDir = path.join(__dirname, 'src', 'pages');
const allFiles = walkSync(pagesDir);

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(/\bpy-20\b/g, 'py-8');
    newContent = newContent.replace(/tracking-\[0\.18em\]/g, 'tracking-[0.05em]');
    newContent = newContent.replace(/pb-20/g, 'pb-10');
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
    }
});
console.log('Global margins and tracking updated!');
