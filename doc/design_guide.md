# My Toolkit 設計指導文件

> 本文件定義了 My Toolkit 專案的統一設計規範，確保所有網頁保持一致的視覺風格與使用者體驗。

---

## 📋 目錄

1. [隱私與安全原則](#-隱私與安全原則)
2. [專案架構](#-專案架構)
3. [色彩系統](#-色彩系統)
4. [字體系統](#-字體系統)
5. [佈局與間距](#-佈局與間距)
6. [組件設計](#-組件設計)
7. [主題切換](#-主題切換)
8. [動畫與過渡效果](#-動畫與過渡效果)
9. [響應式設計](#-響應式設計)
10. [圖示系統](#-圖示系統)
11. [建立新頁面](#-建立新頁面)
12. [設計一致性檢查清單](#-設計一致性檢查清單)
13. [參考資源](#-參考資源)
14. [版本記錄](#-版本記錄)

---

## 🔒 隱私與安全原則

> [!IMPORTANT]
> **本機執行原則**
>
> My Toolkit 的所有工具**必須完全在用戶的本機瀏覽器中執行**，以確保用戶隱私與資料安全。
>
> - ✅ **允許**：使用 JavaScript 在瀏覽器端處理所有資料
> - ✅ **允許**：使用 localStorage 在本機儲存用戶偏好設定
> - ✅ **允許**：使用 CDN 載入公開的函式庫（Tailwind CSS、Font Awesome 等）
> - ❌ **禁止**：上傳用戶資料到任何伺服器或第三方服務
> - ❌ **禁止**：使用需要後端 API 的功能
> - ❌ **禁止**：使用任何追蹤或分析服務（如 Google Analytics）
>
> **開發新工具時，請確保：**
> 1. 所有資料處理邏輯都在客戶端完成
> 2. 不依賴任何後端服務或資料庫
> 3. 不收集、傳輸或儲存用戶的任何個人資訊
> 4. 用戶的資料永遠不會離開他們的裝置

---

## 📁 專案架構

### 檔案結構

```
MyToolkit/
├── index.html              # 首頁
├── assets/
│   ├── css/
│   │   └── common.css      # 共用 CSS 樣式
│   └── js/
│       └── common.js       # 共用 JavaScript
├── tableToMarkdown.html    # Markdown 表格生成器
├── jsonFormatter.html      # JSON 格式化工具
├── diffCompare.html        # 文字差異比較工具
├── hashCompare.html        # Hash 比較工具
├── pdfToPpt.html           # PDF 轉 PowerPoint 工具
└── doc/
    ├── design_guide.md     # 設計指導文件（本文件）
    └── color_platte.md     # 色彩調色盤
```

### 共用樣式 (assets/css/common.css)

所有工具頁面應引用 `assets/css/common.css`，其中包含：

- **Google Fonts** - Noto Sans TC 字體
- **CSS 變數系統** - 淺色/暗色模式變數
- **通用基礎樣式** - body 樣式與過渡效果
- **按鈕樣式** - `.btn-secondary` 等共用按鈕類別

```html
<!-- 引入共用樣式 -->
<link href="assets/css/common.css" rel="stylesheet">
```

---

## 🎨 色彩系統

### 核心色彩調色盤

專案使用四個核心顏色作為設計基礎：

| 名稱 | HEX | RGB | 用途 |
| --- | --- | --- | --- |
| Custom Dark | `#213448` | rgb(33, 52, 72) | 深藍灰色，用於主要文字、深色背景 |
| Custom Medium | `#547792` | rgb(84, 119, 146) | 中藍灰色，用於強調色、按鈕背景 |
| Custom Light | `#94B4C1` | rgb(148, 180, 193) | 淡藍灰色，用於邊框、次要元素 |
| Custom Beige | `#EAE0CF` | rgb(234, 224, 207) | 米白色，用於強調、程式碼文字 |

### Tailwind CSS 配置

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'custom-dark': '#213448',
                'custom-medium': '#547792',
                'custom-light': '#94B4C1',
                'custom-beige': '#EAE0CF',
            }
        }
    }
}
```

### CSS 變數系統

使用 CSS 變數實現明暗主題切換。**所有顏色應使用變數而非硬編碼**。

> [!NOTE]
> 共用變數定義在 `assets/css/common.css` 中。各工具若需特定變數，可在頁面內額外定義。

#### 淺色模式 (Light Mode)

```css
:root {
    /* 背景色 */
    --bg-primary: #ffffff;        /* 主要背景 */
    --bg-secondary: #ffffff;      /* 次要背景 */
    --bg-tertiary: #f8f9fa;       /* 第三層背景 */
    --bg-header: #ffffff;         /* 導航欄/頁首背景 */
    --bg-hero: #547792;           /* Hero 區塊背景（僅 index.html） */
    
    /* 文字色 */
    --text-primary: #213448;      /* 主要文字 */
    --text-secondary: #547792;    /* 次要文字 */
    --text-tertiary: #94B4C1;     /* 第三層文字 */
    --text-hero: #ffffff;         /* Hero 區塊文字（僅 index.html） */
    
    /* 邊框與強調色 */
    --border-color: #94B4C1;      /* 邊框顏色 */
    --accent-primary: #547792;    /* 主要強調色 */
    --accent-secondary: #94B4C1;  /* 次要強調色 */
    --badge-bg: #EAE0CF;          /* 標籤背景 */
    --badge-text: #213448;        /* 標籤文字 */
    --accent-beige: #EAE0CF;      /* 米白強調色 */
    
    /* 卡片樣式（僅 index.html） */
    --card-bg: #ffffff;
    --card-border: #94B4C1;
    
    /* 互動效果 */
    --table-header-bg: #94B4C1;
    --table-hover: rgba(234, 224, 207, 0.3);
    --table-focus: rgba(148, 180, 193, 0.3);
    --menu-hover: rgba(148, 180, 193, 0.2);
    
    /* 程式碼區塊 */
    --code-bg: #213448;
    --code-text: #EAE0CF;
    
    /* 陰影 */
    --shadow-color: rgba(84, 119, 146, 0.2);
}
```

#### 暗色模式 (Dark Mode)

```css
[data-theme="dark"] {
    /* 背景色 */
    --bg-primary: #2a3441;
    --bg-secondary: #1e2936;
    --bg-tertiary: #3a4555;
    --bg-header: #1e2936;
    --bg-hero: #3d4f5f;
    
    /* 文字色 */
    --text-primary: #e8eef3;
    --text-secondary: #94B4C1;
    --text-tertiary: #7a9aaa;
    --text-hero: #e8eef3;
    
    /* 邊框與強調色 */
    --border-color: #547792;
    --accent-primary: #94B4C1;
    --accent-secondary: #547792;
    --badge-bg: #94B4C1;          /* 標籤背景 */
    --badge-text: #1e2936;        /* 標籤文字 */
    --accent-beige: #d4dce4;
    
    /* 卡片樣式 */
    --card-bg: #1e2936;
    --card-border: #547792;
    
    /* 互動效果 */
    --table-header-bg: #3d4f5f;
    --table-hover: rgba(148, 180, 193, 0.15);
    --table-focus: rgba(148, 180, 193, 0.25);
    --menu-hover: rgba(148, 180, 193, 0.15);
    
    /* 程式碼區塊 */
    --code-bg: #1a2332;
    --code-text: #d4dce4;
    
    /* 陰影 */
    --shadow-color: rgba(0, 0, 0, 0.3);
}
```

### 使用範例

```css
/* ✅ 正確：使用 CSS 變數 */
body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
}

/* ❌ 錯誤：硬編碼顏色 */
body {
    background-color: #ffffff;
    color: #213448;
}
```

---

## 🔤 字體系統

### 主要字體

使用 **Noto Sans TC** 作為全站字體，支援中文顯示：

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

body {
    font-family: 'Noto Sans TC', sans-serif;
}
```

### 字重使用規範

| 字重 | 數值 | 使用場景 |
| --- | --- | --- |
| Light | 300 | 輔助說明文字 |
| Regular | 400 | 正文內容 |
| Medium | 500 | 次要標題 |
| Bold | 700 | 主要標題、強調文字 |

### 等寬字體（程式碼）

```css
.md-output, .code-block, pre, code {
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
}
```

---

## 📐 佈局與間距

### 容器寬度

| Class | 寬度 | 使用場景 |
| --- | --- | --- |
| `max-w-6xl` | 72rem (1152px) | 主要內容容器 |
| `max-w-4xl` | 56rem (896px) | Hero 區塊、窄版內容 |

### 間距系統

使用 Tailwind 的間距系統：

| Class | 數值 | 使用場景 |
| --- | --- | --- |
| `gap-2` | 0.5rem (8px) | 小元素間距 |
| `gap-3` | 0.75rem (12px) | 中等元素間距 |
| `gap-4` | 1rem (16px) | 標準元素間距 |
| `gap-6` | 1.5rem (24px) | 大區塊間距 |
| `p-4` | 1rem (16px) | 標準內邊距 |
| `p-6` | 1.5rem (24px) | 大內邊距 |

---

## 🧩 組件設計

### 1. 導航欄 (Navbar)

#### 首頁樣式 (index.html)

```html
<nav class="sticky top-0 z-50"
     style="background-color: var(--bg-header); 
            border-bottom: 1px solid var(--border-color); 
            transition: all 0.3s ease;">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <!-- Logo 區域 -->
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-custom-medium rounded-lg flex items-center justify-center text-white">
                    <i class="fas fa-toolbox text-sm"></i>
                </div>
                <span class="font-bold text-xl tracking-tight"
                      style="color: var(--text-primary);">My Toolkit</span>
            </div>
            
            <!-- 右側按鈕 -->
            <div class="flex items-center gap-3">
                <!-- 主題切換按鈕、GitHub 連結等 -->
            </div>
        </div>
    </div>
</nav>
```

#### 工具頁面樣式

```html
<header class="flex justify-between items-center p-4 rounded-xl shadow-sm"
        style="background-color: var(--bg-header); 
               border: 1px solid var(--border-color);">
    <div class="flex items-center gap-3">
        <!-- 返回首頁連結 -->
        <a href="index.html" class="text-sm flex items-center gap-1 px-2 py-1 rounded-lg transition-all"
            style="color: var(--text-secondary);"
            onmouseover="this.style.backgroundColor='rgba(148, 180, 193, 0.15)'; this.style.color='var(--accent-primary)'"
            onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text-secondary)'"
            title="返回首頁">
            <i class="fas fa-arrow-left text-xs"></i>
            <span class="hidden sm:inline">首頁</span>
        </a>
        
        <!-- 工具圖示 -->
        <div class="w-10 h-10 bg-custom-medium rounded-lg flex items-center justify-center text-white text-xl">
            <i class="fas fa-code"></i>
        </div>
        
        <!-- 工具標題 -->
        <div>
            <h1 class="text-xl font-bold" style="color: var(--text-primary);">工具名稱</h1>
            <p class="text-xs" style="color: var(--text-secondary);">工具描述</p>
        </div>
    </div>
    <!-- 右側按鈕 -->
</header>
```

**設計要點：**
- Logo 圖示使用 `bg-custom-medium` 背景色
- 首頁使用 sticky 導航欄，工具頁使用圓角卡片式標題
- 工具頁面需包含返回首頁連結

### 2. 按鈕設計

#### 透明按鈕（主題切換、導航用）

```html
<button id="themeToggle" onclick="toggleTheme()"
        class="btn-secondary">
    <i id="themeIcon" class="fas fa-moon"></i>
    <span id="themeText">暗黑模式</span>
</button>
```

#### 主要操作按鈕

```html
<button onclick="copyMarkdown()"
        class="px-4 py-2 text-sm bg-custom-medium hover:bg-custom-dark text-white rounded-lg shadow transition flex items-center gap-2">
    <i class="fas fa-copy"></i> 複製 Markdown
</button>
```

**設計要點：**
- 透明按鈕：預設透明，hover 時顯示背景色與邊框
- 主要按鈕：使用 `bg-custom-medium`，hover 時變為 `bg-custom-dark`
- 圓角：統一使用 `rounded-lg`
- 圖示與文字間距：`gap-2`

### 3. 卡片設計 (index.html)

```html
<a href="tableToMarkdown.html" class="tool-card block rounded-xl overflow-hidden shadow-sm group">
    <!-- 頂部色條 -->
    <div class="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
    
    <!-- 卡片內容 -->
    <div class="p-6">
        <div class="mb-4">
            <!-- 圖示 -->
            <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 text-xl group-hover:scale-110 transition-transform">
                <i class="fas fa-table"></i>
            </div>
        </div>
        <h3 class="text-lg font-bold mb-2">Markdown 表格生成器</h3>
        <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">
            視覺化的表格編輯器...
        </p>
    </div>
    
    <!-- 底部資訊 -->
    <div class="px-6 py-3 border-t flex items-center justify-between"
         style="background-color: var(--bg-primary); border-color: var(--border-color);">
        <span class="text-xs font-medium" style="color: var(--text-secondary);">生產力工具</span>
        <i class="fas fa-arrow-right text-slate-300 group-hover:text-indigo-500 transition-colors"></i>
    </div>
</a>
```

```css
.tool-card {
    transition: all 0.3s ease;
    background-color: var(--card-bg);
    border-color: var(--card-border);
}

.tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px var(--shadow-color);
}
```

**設計要點：**
- 頂部色條：使用漸層色區分不同工具
- Hover 效果：向上移動 5px 並增加陰影
- 圖示縮放：group-hover 時放大 1.1 倍

### 4. Hero 區塊 (index.html)

```html
<div class="py-16 sm:py-24" style="background-color: var(--bg-hero);">
    <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-3xl sm:text-4xl font-extrabold mb-4"
            style="color: var(--text-hero);">
            簡單、好用的線上工具集
        </h1>
        <p class="text-lg sm:text-xl max-w-2xl mx-auto"
           style="color: var(--text-hero); opacity: 0.9;">
            這裡收集了我開發的各種網頁小工具，無需安裝，打開瀏覽器即可使用。
        </p>
    </div>
</div>
```

### 5. Footer (index.html)

```html
<footer class="py-8"
        style="background-color: var(--bg-header); 
               border-top: 1px solid var(--border-color);">
    <div class="max-w-6xl mx-auto px-4 text-center text-sm"
         style="color: var(--text-secondary);">
        <p>&copy; 2026 My Toolkit. Hosted on GitHub Pages.</p>
    </div>
</footer>
```

### 6. 表格設計

```css
.editor-container {
    overflow: auto;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    background: var(--bg-secondary);
    box-shadow: 0 4px 6px -1px var(--shadow-color);
}

table.editor-table th,
table.editor-table td {
    border: 1px solid var(--border-color);
    padding: 12px;
    min-width: 100px;
    transition: background-color 0.2s, border-color 0.3s;
}

table.editor-table th {
    background-color: var(--table-header-bg);
    font-weight: 600;
    color: var(--text-primary);
}

table.editor-table th:focus,
table.editor-table td:focus {
    background-color: var(--table-focus);
    border: 2px solid var(--accent-primary);
}

table.editor-table tbody tr:hover td {
    background-color: var(--table-hover);
}
```

### 7. 右鍵選單

```css
#contextMenu {
    display: none;
    position: absolute;
    z-index: 1000;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px var(--shadow-color);
    min-width: 220px;
    padding: 0.5rem 0;
    animation: fadeIn 0.1s ease-out;
}

.menu-item {
    padding: 0.6rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-primary);
    font-size: 0.9rem;
    transition: background 0.1s, color 0.3s;
}

.menu-item:hover {
    background-color: var(--menu-hover);
    color: var(--accent-primary);
}
```

### 8. 程式碼區塊

```css
.md-output {
    font-family: 'Consolas', 'Monaco', monospace;
    white-space: pre;
    overflow-x: auto;
    line-height: 1.6;
}
```

```html
<div class="h-full rounded-lg shadow-inner overflow-hidden flex flex-col"
     style="background-color: var(--code-bg);">
    <textarea id="mdOutput" 
              class="w-full h-full p-6 md-output resize-none focus:outline-none text-sm"
              style="background-color: var(--code-bg); 
                     color: var(--code-text);"
              readonly></textarea>
</div>
```

**設計要點：**
- 使用等寬字體
- 深色背景 + 淺色文字（即使在淺色模式下）
- 唯讀、不可調整大小
- 內陰影效果

---

## 🌓 主題切換

### 共用 JavaScript 檔案

所有頁面使用 `assets/js/common.js` 共用主題切換邏輯：

```javascript
// 切換主題
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeButton(newTheme);
}

// 更新按鈕圖示與文字
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

// 初始化主題
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});
```

**設計要點：**
- 使用 `data-theme` 屬性控制主題
- 主題偏好儲存在 `localStorage`
- 預設為淺色模式
- **按鈕顯示當前模式**：暗黑模式顯示月亮圖標和「暗黑模式」，明亮模式顯示太陽圖標和「明亮模式」
- 首頁只顯示圖示，工具頁面顯示圖示+文字

### 防止主題閃爍 (重要！)

> [!IMPORTANT]
> **阻塞腳本**
>
> 為避免頁面載入時出現主題閃爍（用戶保存暗黑模式偏好但頁面先顯示白色），必須在 `<head>` 中加入一個**立即執行的阻塞腳本**，在 CSS 載入後、DOM 渲染前設定主題。

```html
<!-- 在 <head> 中，CSS 檔案之後，立即加入 -->

<!-- 立即設定主題，避免頁面閃爍 -->
<script>
    (function() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    })();
</script>

<!-- 共用 JavaScript -->
<script src="assets/js/common.js"></script>
```

**為什麼需要這個阻塞腳本？**
1. `DOMContentLoaded` 事件在 DOM 完成解析後才觸發，此時用戶已經看到初始渲染
2. 使用立即執行函數 (IIFE) 可以在 CSS 變數生效前就設定 `data-theme`
3. 這確保第一次渲染就是正確的主題，沒有閃爍

---

## ✨ 動畫與過渡效果

### 全域過渡

```css
body {
    transition: background-color 0.3s ease, color 0.3s ease;
}
```

### 組件過渡時間規範

| 類型 | 時間 | 使用場景 |
| --- | --- | --- |
| 快速互動 | `0.1s - 0.2s` | hover、focus 效果 |
| 標準過渡 | `0.3s` | 顏色、背景變化 |

**緩動函數：** 優先使用 `ease` 或 `ease-out`

### 常用動畫

```css
/* 卡片 hover */
.tool-card {
    transition: all 0.3s ease;
}
.tool-card:hover {
    transform: translateY(-5px);
}

/* 選單淡入動畫 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

#contextMenu {
    animation: fadeIn 0.1s ease-out;
}
```

---

## 📱 響應式設計

### 斷點系統

使用 Tailwind 的預設斷點：

| 斷點 | 最小寬度 | 裝置類型 |
| --- | --- | --- |
| `sm:` | 640px | 大型手機 |
| `md:` | 768px | 平板 |
| `lg:` | 1024px | 桌面 |

### 響應式範例

```html
<!-- 間距響應式 -->
<div class="px-4 sm:px-6 lg:px-8">

<!-- 文字大小響應式 -->
<h1 class="text-3xl sm:text-4xl">

<!-- 網格響應式 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- 內邊距響應式 -->
<div class="py-16 sm:py-24">

<!-- 顯示/隱藏響應式 -->
<span class="hidden sm:inline">首頁</span>
```

---

## 🔧 圖示系統

使用 **Font Awesome 6.4.0**：

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
```

### 常用圖示

| 用途 | 圖示 Class |
| --- | --- |
| 工具箱 Logo | `fas fa-toolbox` |
| 表格 | `fas fa-table` |
| JSON/程式碼 | `fas fa-code` |
| 差異比較 | `fas fa-code-compare` |
| Hash | `fas fa-hashtag` |
| 月亮（淺色模式按鈕） | `fas fa-moon` |
| 太陽（暗色模式按鈕） | `fas fa-sun` |
| GitHub | `fab fa-github` |
| Markdown | `fab fa-markdown` |
| 複製 | `fas fa-copy` |
| 重置 | `fas fa-undo` |
| 返回 | `fas fa-arrow-left` |
| 前進箭頭 | `fas fa-arrow-right` |

---

## 🆕 建立新頁面

### 新頁面範本

```html
<!DOCTYPE html>
<html lang="zh-TW">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新工具名稱 - My Toolkit</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'custom-dark': '#213448',
                        'custom-medium': '#547792',
                        'custom-light': '#94B4C1',
                        'custom-beige': '#EAE0CF',
                    }
                }
            }
        }
    </script>
    
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- 共用樣式 -->
    <link href="assets/css/common.css" rel="stylesheet">
    
    <style>
        /* 此工具專用的 CSS 變數或樣式 */
        :root {
            /* 例如：--custom-variable: #value; */
        }

        [data-theme="dark"] {
            /* 暗黑模式的專用變數 */
        }

        /* 工具專用樣式 */
    </style>
</head>

<body class="min-h-screen flex flex-col">
    
    <!-- Header -->
    <header class="flex justify-between items-center p-4 rounded-xl shadow-sm"
            style="background-color: var(--bg-header); border: 1px solid var(--border-color);">
        <div class="flex items-center gap-3">
            <!-- Back to Home Link -->
            <a href="index.html" class="text-sm flex items-center gap-1 px-2 py-1 rounded-lg transition-all"
                style="color: var(--text-secondary);"
                onmouseover="this.style.backgroundColor='rgba(148, 180, 193, 0.15)'; this.style.color='var(--accent-primary)'"
                onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text-secondary)'"
                title="返回首頁">
                <i class="fas fa-arrow-left text-xs"></i>
                <span class="hidden sm:inline">首頁</span>
            </a>
            <div class="w-10 h-10 bg-custom-medium rounded-lg flex items-center justify-center text-white text-xl">
                <i class="fas fa-wrench"></i>
            </div>
            <div>
                <h1 class="text-xl font-bold" style="color: var(--text-primary);">新工具名稱</h1>
                <p class="text-xs" style="color: var(--text-secondary);">工具描述</p>
            </div>
        </div>
        <div class="flex items-center gap-2">
            <button id="themeToggle" onclick="toggleTheme()"
                    class="btn-secondary">
                <i id="themeIcon" class="fas fa-moon"></i>
                <span id="themeText">暗黑模式</span>
            </button>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- 你的內容 -->
    </main>

    <script>
        // Theme toggle functionality
        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            updateThemeButton(newTheme);
        }

        function updateThemeButton(theme) {
            const icon = document.getElementById('themeIcon');
            const text = document.getElementById('themeText');

            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
                text.textContent = '明亮模式';
            } else {
                icon.className = 'fas fa-moon';
                text.textContent = '暗黑模式';
            }
        }

        function initTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeButton(savedTheme);
        }

        // Initialize theme on page load
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
        });
    </script>

</body>

</html>
```

---

## 🎯 設計一致性檢查清單

在建立新頁面時，請確認以下項目：

### 色彩
- [ ] 引入 `assets/css/common.css` 共用樣式
- [ ] 使用 CSS 變數而非硬編碼顏色
- [ ] 如需特定變數，在頁面內額外定義淺色與暗色模式
- [ ] 所有顏色變化都有 `transition` 過渡效果

### 字體
- [ ] 使用 Noto Sans TC 字體（已在 assets/css/common.css 中引入）
- [ ] 使用正確的字重（300/400/500/700）
- [ ] 程式碼區塊使用等寬字體

### 佈局
- [ ] 使用 `max-w-6xl` 或 `max-w-4xl` 容器
- [ ] 響應式間距（px-4 sm:px-6 lg:px-8）
- [ ] 適當的 gap 與 padding

### 組件
- [ ] Header 包含返回首頁連結
- [ ] Logo 使用 `bg-custom-medium` 背景
- [ ] 按鈕有 hover 效果與過渡動畫
- [ ] 主題切換按鈕正常運作

### 主題切換
- [ ] 實作 `toggleTheme()` 函數
- [ ] 使用 `localStorage` 儲存偏好
- [ ] 頁面載入時初始化主題
- [ ] 更新圖示與文字

### 動畫
- [ ] 所有互動元素有 `transition`
- [ ] 過渡時間符合規範（0.1s - 0.3s）
- [ ] 使用 `ease` 或 `ease-out` 緩動

### 響應式
- [ ] 使用 Tailwind 響應式 class
- [ ] 在 sm/md/lg 斷點測試
- [ ] 確保手機版可用

---

## 📚 參考資源

- [Tailwind CSS 官方文件](https://tailwindcss.com/docs)
- [Font Awesome 圖示庫](https://fontawesome.com/icons)
- [Google Fonts - Noto Sans TC](https://fonts.google.com/noto/specimen/Noto+Sans+TC)

---

## 📌 版本記錄

| 版本 | 日期 | 變更內容 |
| --- | --- | --- |
| 1.0 | 2026-01-05 | 初版發布，基於 index.html 與 tableToMarkdown.html 分析 |
| 1.1 | 2026-01-08 | 新增 common.css 共用樣式檔案說明 |
| 1.2 | 2026-01-09 | 整理文檔結構，優化目錄導航，新增專案架構說明 |
| 1.3 | 2026-07-29 | 將共用 CSS 與 JavaScript 分類至 assets 目錄，維持所有頁面路徑不變 |
| 1.4 | 2026-08-13 | 新增 PDF to PowerPoint 工具規格與首頁入口 |

---

**維護者：** Simon Lai  
**最後更新：** 2026-08-13

---

## AI Resources 頁面

- 頁面檔案為 `aiResources.html`，資源資料集中於 `data/ai-resources.md`。
- 前端以 `fetch()` 讀取 Markdown；每筆資源使用 `## 名稱`、`URL`、`Type`、`Tags`、`Summary` 欄位。
- `Type` 為固定的單選分類：`Skill`、`Agent`、`Framework`。
- `Tags` 為固定用途分類：`Development`、`Productivity`、`Browser`、`Automation`；可多選，且與 Type 篩選採 AND 邏輯。
- 搜尋框即時比對名稱、簡介、Type 與 Tags；篩選按鈕與清除按鈕沿用 `rounded-lg`、共用色彩變數及既有按鈕互動規則。
- 資源卡片沿用工具卡的圓角、陰影與 hover 位移效果；卡片內的「前往」按鈕在新分頁開啟來源連結。

---

## PDF to PowerPoint 頁面

- 頁面檔案為 `pdfToPpt.html`，使用 PDF.js 在瀏覽器逐頁渲染 PDF，再由 PptxGenJS 產生 `.pptx`。
- 每一頁 PDF 對應一張投影片，頁面以圖片形式置入；保留原始視覺版面，但投影片內文字、表格與圖形不可個別編輯。
- 支援小檔案、標準及高品質三種渲染品質，並支援依 PDF 第一頁、16:9、4:3 三種投影片比例。
- 頁面採左側上傳與預覽、右側設定與進度的響應式配置；手機版改為單欄。
- 大型 PDF 必須逐頁處理並釋放 Canvas，不可將所有高解析頁面同時保留在記憶體。
- PDF 與產生的投影片資料完全在用戶瀏覽器內處理，不得上傳至伺服器。
