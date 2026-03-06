import fs from 'fs';
const langs = ['en', 'zh-TW', ''];
for (const l of langs) {
    const p = l ? `../dist/docs/${l}/faq.html` : `../dist/docs/faq.html`;
    const tag = l || 'vi';
    if (!fs.existsSync(p)) continue;

    let cnt = fs.readFileSync(p, 'utf8');
    const matches = [...cnt.matchAll(/<h3 id="([^"]+)"[^>]*>.*?<\/h3>/g)];
    console.log(`\n--- ${tag} ---`);
    for (const m of matches) {
        console.log(m[1]);
    }
}
