/**
 * My Toolkit - 共用 JavaScript
 * 此檔案包含所有工具頁面共用的功能
 */

// ========================================
// 主題切換功能
// ========================================

/**
 * 切換主題（明亮/暗黑模式）
 */
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    updateThemeButton(newTheme);
}

/**
 * 更新主題按鈕的圖示和文字
 * @param {string} theme - 當前主題 ('light' 或 'dark')
 */
function updateThemeButton(theme) {
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');

    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
        if (text) text.textContent = '暗黑模式';
    } else {
        icon.className = 'fas fa-sun';
        if (text) text.textContent = '明亮模式';
    }
}

/**
 * 初始化主題（從 localStorage 讀取並套用）
 * 注意：此函數應在 DOMContentLoaded 後調用，用於更新按鈕狀態
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

// 頁面載入時初始化主題按鈕狀態
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});
