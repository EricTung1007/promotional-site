import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "AI Coach",
    description: "Documentation and Wiki for the AI Coach Platform",

    // Set the base to match our GitHub pages path
    base: '/promotional-site/docs/',

    // Output this directly into the dist folder so it gets deployed along with the main site
    outDir: '../dist/docs',

    locales: {
        root: {
            label: 'Tiếng Việt',
            lang: 'vi',
            themeConfig: {
                nav: [
                    { text: 'Trang chủ', link: '/' },
                    { text: 'Về trang chính', link: 'https://erictung1007.github.io/promotional-site/' },
                ],
                sidebar: [
                    {
                        text: 'Bắt đầu',
                        items: [
                            { text: 'Hướng dẫn nhanh', link: '/getting-started' },
                            { text: 'Hướng dẫn chung', link: '/USER_GUIDE' },
                            { text: 'Câu hỏi thường gặp', link: '/faq' },
                        ]
                    },
                    {
                        text: 'Tính năng',
                        items: [
                            { text: 'Bảng điều khiển', link: '/dashboard' },
                            { text: 'Mô phỏng thực hành', link: '/practice' },
                            { text: 'Đánh giá & Phản hồi', link: '/evaluation' },
                            { text: 'Lịch sử', link: '/history' },
                            { text: 'Trợ lý kiến thức', link: '/knowledge-assistant' },
                        ]
                    }
                ]
            }
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en/',
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Back to Site', link: 'https://erictung1007.github.io/promotional-site/' },
                ],
                sidebar: [
                    {
                        text: 'Getting Started',
                        items: [
                            { text: 'Quick Start', link: '/en/getting-started' },
                            { text: 'General Guide', link: '/en/USER_GUIDE' },
                            { text: 'FAQ', link: '/en/faq' },
                        ]
                    },
                    {
                        text: 'Features',
                        items: [
                            { text: 'Dashboard', link: '/en/dashboard' },
                            { text: 'Practice Simulation', link: '/en/practice' },
                            { text: 'Evaluation & Feedback', link: '/en/evaluation' },
                            { text: 'History Tracking', link: '/en/history' },
                            { text: 'Knowledge Assistant', link: '/en/knowledge-assistant' },
                        ]
                    }
                ]
            }
        },
        'zh-TW': {
            label: '繁體中文',
            lang: 'zh-TW',
            link: '/zh-TW/',
            themeConfig: {
                nav: [
                    { text: '首頁', link: '/zh-TW/' },
                    { text: '回主站', link: 'https://erictung1007.github.io/promotional-site/' },
                ],
                sidebar: [
                    {
                        text: '開始使用',
                        items: [
                            { text: '快速開始', link: '/zh-TW/getting-started' },
                            { text: '一般指南', link: '/zh-TW/USER_GUIDE' },
                            { text: '常見問題', link: '/zh-TW/faq' },
                        ]
                    },
                    {
                        text: '主要功能',
                        items: [
                            { text: '儀表板', link: '/zh-TW/dashboard' },
                            { text: '對話練習', link: '/zh-TW/practice' },
                            { text: '評量報告', link: '/zh-TW/evaluation' },
                            { text: '練習歷史', link: '/zh-TW/history' },
                            { text: '知識助手', link: '/zh-TW/knowledge-assistant' },
                        ]
                    }
                ]
            }
        }
    },

    themeConfig: {
        search: { provider: 'local' },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/EricTung1007/promotional-site' }
        ]
    }
})
