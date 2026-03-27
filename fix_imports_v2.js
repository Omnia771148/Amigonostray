const fs = require('fs');
const path = require('path');
const folders = ['importspecial', 'milkshake', 'sand', 'toco', 'mojosoda', 'french', 'specialpizza', 'familypizza', 'pizza', 'hotdogs', 'egg'];
const itemsToMoveUp = ['display', 'back', 'import.css', 'main.css', 'Header', 'Carousel', 'scroll', 'App'];

folders.forEach(folder => {
    const dirPath = path.join(__dirname, 'src', 'app', folder);
    if (!fs.existsSync(dirPath)) return;
    fs.readdirSync(dirPath).forEach(file => {
        if (!file.endsWith('.js')) return;
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Final attempt: find all instances of messed up quotes
        // like "../display"" or "../back'"
        itemsToMoveUp.forEach(item => {
             // Fix messed up repeats
             content = content.replace(new RegExp(`"\\.\\.\\/${item}""`, 'g'), `"../${item}"`);
             content = content.replace(new RegExp(`'\\.\\.\\/${item}''`, 'g'), `'../${item}'`);
             content = content.replace(new RegExp(`"\\.\\.\\/${item}'"`, 'g'), `"../${item}"`);
             content = content.replace(new RegExp(`'\\.\\.\\/${item}"'`, 'g'), `'../${item}'`);
             
             // Also catch the original broken state if it was partially matched
             content = content.replace(new RegExp(`from\\s+['"]\\.\\/${item}['"]`, 'g'), `from "../${item}"`);
        });
        
        // Also fix the importspecial data.js special case
        if (folder === 'importspecial') {
           content = content.replace(/from\s+['"]\.\.\/data['"]/g, 'from "../data"');
           content = content.replace(/from\s+['"]\.\/data['"]/g, 'from "../data"');
        }

        fs.writeFileSync(filePath, content);
    });
});
