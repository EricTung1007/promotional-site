import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ router }: any) {
        if (typeof window !== 'undefined') {
            // Function to check access and prompt
            const checkAccess = (path: string) => {
                if (path.includes('/admin-knowledge') || path.includes('/admin-users')) {
                    if (!sessionStorage.getItem('isAdminConfirm')) {
                        const isZh = path.includes('/zh-TW/');
                        const isEn = path.includes('/en/');

                        let msg = "Bạn có phải là quản trị viên không?"; // Default (vi)
                        if (isZh) {
                            msg = "請問您是管理員嗎？";
                        } else if (isEn) {
                            msg = "Are you an administrator?";
                        }

                        if (!window.confirm(msg)) {
                            return false; // User cancelled
                        } else {
                            sessionStorage.setItem('isAdminConfirm', 'true');
                        }
                    }
                }
                return true; // OK to proceed
            };

            // Intercept client-side route changes
            router.onBeforeRouteChange = (to: string) => {
                if (!checkAccess(to)) {
                    return false; // Prevent navigation
                }
            };

            // Also check on initial page load (for direct URL visits or full reloads)
            // Use setTimeout to ensure this runs after hydration to prevent hydration mismatch
            setTimeout(() => {
                const currentPath = window.location.pathname;
                if (currentPath.includes('/admin-knowledge') || currentPath.includes('/admin-users')) {
                    if (!sessionStorage.getItem('isAdminConfirm')) {
                        if (!checkAccess(currentPath)) {
                            // If they cancel on initial load, redirect to docs home
                            const isZh = currentPath.includes('/zh-TW/');
                            const isEn = currentPath.includes('/en/');
                            window.location.href = isZh ? '/promotional-site/docs/zh-TW/' : (isEn ? '/promotional-site/docs/en/' : '/promotional-site/docs/');
                        }
                    }
                }
            }, 0);
        }
    }
} satisfies Theme
