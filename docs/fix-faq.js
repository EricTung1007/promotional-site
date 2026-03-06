import fs from 'fs';
import path from 'path';

const files = [
    'd:/cathay/Ai coach website/promotional-site/docs/en/faq.md',
    'd:/cathay/Ai coach website/promotional-site/docs/zh-TW/faq.md',
    'd:/cathay/Ai coach website/promotional-site/docs/faq.md'
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // Replace lines that start with a single space or space+tabs, followed by text, ending with ? or ？
    content = content.replace(/^ \s*([^\n]+?[?？])\s*$/gm, '### $1');

    // Also fix the one weird Vietnamese one that already had ### Hỏi:
    content = content.replace(/^### Hỏi: /gm, '### ');

    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
}
