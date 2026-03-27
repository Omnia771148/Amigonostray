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
        itemsToMoveUp.forEach(item => {
            const regex = new RegExp(`from\\s+['"]\\.\\/${item}(['"]|(?:\\.js['"]))`, 'g');
            content = content.replace(regex, `from "../${item}$1"`);
        });
        // Special case for data.js in importspecial
        if (folder === 'importspecial') {
           content = content.replace(/from\s+['"]\.\/data['"]/g, 'from "../data"');
        }
        
        fs.writeFileSync(filePath, content);
    });
});
