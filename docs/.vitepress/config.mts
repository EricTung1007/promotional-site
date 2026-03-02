import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "AI Coach User Guide",
    description: "Documentation and Wiki for the AI Coach Platform",

    // Set the base to match our GitHub pages path
    base: '/promotional-site/docs/',

    // Output this directly into the dist folder so it gets deployed along with the main site
    outDir: '../dist/docs',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Back to Site', link: '/promotional-site/' },
        ],

        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    { text: 'Getting Started', link: '/getting-started' },
                    { text: 'General Guide', link: '/USER_GUIDE' },
                    { text: 'FAQ', link: '/faq' },
                ]
            },
            {
                text: 'Features',
                items: [
                    { text: 'Dashboard', link: '/dashboard' },
                    { text: 'Practice Simulation', link: '/practice' },
                    { text: 'Evaluation & Feedback', link: '/evaluation' },
                    { text: 'History Tracking', link: '/history' },
                    { text: 'Knowledge Assistant', link: '/knowledge-assistant' },
                ]
            },
            {
                text: 'Administration',
                items: [
                    { text: 'User Management', link: '/admin-users' },
                    { text: 'Prompt & AI Behavior', link: '/admin-prompts' },
                    { text: 'Manage Knowledge Base', link: '/admin-knowledge' },
                    { text: 'Training Stages', link: '/admin-stages' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/EricTung1007/promotional-site' }
        ]
    }
})
