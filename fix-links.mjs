import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        if (file.includes('node_modules') || file.includes('.vitepress')) return;
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.md')) {
            results.push(file);
        }
    });
    return results;
}

const docsDir = 'd:/cathay/Ai coach website/promotional-site/docs';
const files = walk(docsDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changes = 0;
    const regex = /\[([^\]]+)\.md\]\(([^)]+\.md)\)/g;
    const newContent = content.replace(regex, (match, p1, p2) => {
        changes++;
        const title = p1.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return `[${title}](${p2})`;
    });

    if (changes > 0) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${changes} links in ${file}`);
    }
});
