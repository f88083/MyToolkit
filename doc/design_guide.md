# My Toolkit 設計指導文件

> 本文件定義了 My Toolkit 專案的統一設計規範，確保所有網頁保持一致的視覺風格與使用者體驗。

## 📋 目錄

- [色彩系統](#色彩系統)
- [字體系統](#字體系統)
- [佈局與間距](#佈局與間距)
- [組件設計](#組件設計)
- [主題切換](#主題切換)
- [動畫與過渡效果](#動畫與過渡效果)
- [響應式設計](#響應式設計)

---

## 🎨 色彩系統

### 核心色彩定義

專案使用 **Tailwind CSS** 並擴展自訂色彩，基於以下四個核心顏色：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'custom-dark': '#213448',    // 深藍灰色
                'custom-medium': '#547792',  // 中藍灰色
                'custom-light': '#94B4C1',   // 淡藍灰色
                'custom-beige': '#EAE0CF',   // 米白色
            }
        }
    }
}
```

### CSS 變數系統

使用 CSS 變數實現明暗主題切換，所有顏色應使用變數而非硬編碼：

#### 淺色模式 (Light Mode)

```css
:root {
    /* 背景色 */
    --bg-primary: #ffffff;        /* 主要背景 */
    --bg-secondary: #ffffff;      /* 次要背景 */
    --bg-tertiary: #f8f9fa;       /* 第三層背景（僅 tableToMarkdown.html） */
    --bg-header: #ffffff;         /* 導航欄/頁首背景 */
    --bg-hero: #547792;           /* Hero 區塊背景（僅 index.html） */
    
    /* 文字色 */
    --text-primary: #213448;      /* 主要文字 */
    --text-secondary: #547792;    /* 次要文字 */
    --text-tertiary: #94B4C1;     /* 第三層文字（僅 tableToMarkdown.html） */
    --text-hero: #ffffff;         /* Hero 區塊文字（僅 index.html） */
    
    /* 邊框與強調色 */
    --border-color: #94B4C1;      /* 邊框顏色 */
    --accent-primary: #547792;    /* 主要強調色 */
    --accent-secondary: #94B4C1;  /* 次要強調色（僅 tableToMarkdown.html） */
    --accent-beige: #EAE0CF;      /* 米白強調色（僅 tableToMarkdown.html） */
    
    /* 卡片樣式 */
    --card-bg: #ffffff;           /* 卡片背景（僅 index.html） */
    --card-border: #94B4C1;       /* 卡片邊框（僅 index.html） */
    
    /* 表格專用（僅 tableToMarkdown.html） */
    --table-header-bg: #94B4C1;   /* 表格標頭背景 */
    --table-hover: rgba(234, 224, 207, 0.3);   /* 表格 hover 效果 */
    --table-focus: rgba(148, 180, 193, 0.3);   /* 表格聚焦效果 */
    --menu-hover: rgba(148, 180, 193, 0.2);    /* 選單 hover 效果 */
    
    /* 程式碼區塊（僅 tableToMarkdown.html） */
    --code-bg: #213448;           /* 程式碼背景 */
    --code-text: #EAE0CF;         /* 程式碼文字 */
    
    /* 陰影 */
    --shadow-color: rgba(84, 119, 146, 0.2);   /* 陰影顏色 */
}
```

#### 暗色模式 (Dark Mode)

```css
[data-theme="dark"] {
    /* 背景色 */
    --bg-primary: #2a3441;        /* 主要背景 */
    --bg-secondary: #1e2936;      /* 次要背景 */
    --bg-tertiary: #3a4555;       /* 第三層背景（僅 tableToMarkdown.html） */
    --bg-header: #1e2936;         /* 導航欄/頁首背景 */
    --bg-hero: #3d4f5f;           /* Hero 區塊背景（僅 index.html） */
    
    /* 文字色 */
    --text-primary: #e8eef3;      /* 主要文字 */
    --text-secondary: #94B4C1;    /* 次要文字 */
    --text-tertiary: #7a9aaa;     /* 第三層文字（僅 tableToMarkdown.html） */
    --text-hero: #e8eef3;         /* Hero 區塊文字（僅 index.html） */
    
    /* 邊框與強調色 */
    --border-color: #547792;      /* 邊框顏色 */
    --accent-primary: #94B4C1;    /* 主要強調色 */
    --accent-secondary: #547792;  /* 次要強調色（僅 tableToMarkdown.html） */
    --accent-beige: #d4dce4;      /* 米白強調色（僅 tableToMarkdown.html） */
    
    /* 卡片樣式 */
    --card-bg: #1e2936;           /* 卡片背景（僅 index.html） */
    --card-border: #547792;       /* 卡片邊框（僅 index.html） */
    
    /* 表格專用（僅 tableToMarkdown.html） */
    --table-header-bg: #3d4f5f;   /* 表格標頭背景 */
    --table-hover: rgba(148, 180, 193, 0.15);  /* 表格 hover 效果 */
    --table-focus: rgba(148, 180, 193, 0.25);  /* 表格聚焦效果 */
    --menu-hover: rgba(148, 180, 193, 0.15);   /* 選單 hover 效果 */
    
    /* 程式碼區塊（僅 tableToMarkdown.html） */
    --code-bg: #1a2332;           /* 程式碼背景 */
    --code-text: #d4dce4;         /* 程式碼文字 */
    
    /* 陰影 */
    --shadow-color: rgba(0, 0, 0, 0.3);        /* 陰影顏色 */
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
.md-output {
    font-family: 'Consolas', 'Monaco', monospace;
}
```

---

## 📐 佈局與間距

### 容器寬度

```css
/* 主要內容容器 */
.max-w-6xl {
    max-width: 72rem; /* 1152px */
}

/* Hero 區塊容器 */
.max-w-4xl {
    max-width: 56rem; /* 896px */
}
```

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

#### index.html 樣式

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
                <!-- 主題切換按鈕 -->
                <!-- GitHub 連結 -->
            </div>
        </div>
    </div>
</nav>
```

#### tableToMarkdown.html 樣式

```html
<header class="flex justify-between items-center p-4 rounded-xl shadow-sm"
        style="background-color: var(--bg-header); 
               border: 1px solid var(--border-color);">
    <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-custom-medium rounded-lg flex items-center justify-center text-white text-xl">
            <i class="fas fa-table"></i>
        </div>
        <div>
            <h1 class="text-xl font-bold" style="color: var(--text-primary);">
                Markdown 表格生成器
            </h1>
            <p class="text-xs" style="color: var(--text-secondary);">
                右鍵點擊表格可進行編輯
            </p>
        </div>
    </div>
    <!-- 右側按鈕 -->
</header>
```

**設計要點：**
- Logo 圖示使用 `bg-custom-medium` 背景色
- index.html 使用 sticky 導航欄，tableToMarkdown.html 使用圓角卡片式標題
- 高度：index.html 為 `h-16` (64px)，tableToMarkdown.html 為 `p-4`

### 2. 按鈕設計

#### 主題切換按鈕

```html
<button id="themeToggle" onclick="toggleTheme()"
        class="px-4 py-2 text-sm rounded-lg transition border flex items-center gap-2"
        style="color: var(--text-primary); 
               background: transparent; 
               border-color: transparent;"
        onmouseover="this.style.backgroundColor='var(--table-hover)'; 
                     this.style.borderColor='var(--border-color)'"
        onmouseout="this.style.backgroundColor='transparent'; 
                    this.style.borderColor='transparent'">
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
        <div class="flex items-start justify-between mb-4">
            <!-- 圖示 -->
            <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 text-xl group-hover:scale-110 transition-transform">
                <i class="fas fa-table"></i>
            </div>
            <!-- 狀態標籤 -->
            <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">已上線</span>
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

**CSS 樣式：**

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

### 6. 表格設計 (tableToMarkdown.html)

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

### 7. 右鍵選單 (tableToMarkdown.html)

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

---

## 🌓 主題切換

### JavaScript 實作

兩個檔案使用相同的主題切換邏輯：

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

// 更新按鈕圖示
function updateThemeButton(theme) {
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText'); // tableToMarkdown.html 專用
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        if (text) text.textContent = '明亮模式';
    } else {
        icon.className = 'fas fa-moon';
        if (text) text.textContent = '暗黑模式';
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
- index.html 只顯示圖示，tableToMarkdown.html 顯示圖示+文字

---

## ✨ 動畫與過渡效果

### 全域過渡

```css
body {
    transition: background-color 0.3s ease, color 0.3s ease;
}
```

### 組件過渡

```css
/* 按鈕 */
button {
    transition: all 0.3s ease;
}

/* 卡片 */
.tool-card {
    transition: all 0.3s ease;
}

.tool-card:hover {
    transform: translateY(-5px);
}

/* 表格 */
table.editor-table th,
table.editor-table td {
    transition: background-color 0.2s, border-color 0.3s;
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

**過渡時間規範：**
- 快速互動（hover、focus）：`0.1s - 0.2s`
- 標準過渡（顏色、背景）：`0.3s`
- 緩動函數：優先使用 `ease` 或 `ease-out`

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
```

---

## 🔧 圖示系統

使用 **Font Awesome 6.4.0**：

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
```

### 常用圖示

| 用途 | 圖示 Class | 範例 |
| --- | --- | --- |
| 工具箱 Logo | `fas fa-toolbox` | <i class="fas fa-toolbox"></i> |
| 表格 | `fas fa-table` | <i class="fas fa-table"></i> |
| 月亮（淺色模式） | `fas fa-moon` | <i class="fas fa-moon"></i> |
| 太陽（暗色模式） | `fas fa-sun` | <i class="fas fa-sun"></i> |
| GitHub | `fab fa-github` | <i class="fab fa-github"></i> |
| Markdown | `fab fa-markdown` | <i class="fab fa-markdown"></i> |
| 複製 | `fas fa-copy` | <i class="fas fa-copy"></i> |
| 重置 | `fas fa-undo` | <i class="fas fa-undo"></i> |

---

## 📝 程式碼區塊設計 (tableToMarkdown.html)

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

## 🎯 設計一致性檢查清單

在建立新頁面時，請確認以下項目：

### ✅ 色彩
- [ ] 使用 CSS 變數而非硬編碼顏色
- [ ] 定義完整的淺色與暗色模式變數
- [ ] 所有顏色都有 `transition` 過渡效果

### ✅ 字體
- [ ] 引入 Noto Sans TC 字體
- [ ] 使用正確的字重（300/400/500/700）
- [ ] 程式碼區塊使用等寬字體

### ✅ 佈局
- [ ] 使用 `max-w-6xl` 或 `max-w-4xl` 容器
- [ ] 響應式間距（px-4 sm:px-6 lg:px-8）
- [ ] 適當的 gap 與 padding

### ✅ 組件
- [ ] Logo 使用 `bg-custom-medium` 背景
- [ ] 按鈕有 hover 效果與過渡動畫
- [ ] 卡片有陰影與 hover 提升效果

### ✅ 主題切換
- [ ] 實作 `toggleTheme()` 函數
- [ ] 使用 `localStorage` 儲存偏好
- [ ] 更新圖示與文字

### ✅ 動畫
- [ ] 所有互動元素有 `transition`
- [ ] 過渡時間符合規範（0.1s - 0.3s）
- [ ] 使用 `ease` 或 `ease-out` 緩動

### ✅ 響應式
- [ ] 使用 Tailwind 響應式 class
- [ ] 在 sm/md/lg 斷點測試
- [ ] 確保手機版可用

---

## 🆕 建立新頁面範本

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
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

        :root {
            /* Light Mode Colors */
            --bg-primary: #ffffff;
            --bg-secondary: #ffffff;
            --bg-header: #ffffff;
            --text-primary: #213448;
            --text-secondary: #547792;
            --border-color: #94B4C1;
            --accent-primary: #547792;
            --shadow-color: rgba(84, 119, 146, 0.2);
        }

        [data-theme="dark"] {
            /* Dark Mode Colors */
            --bg-primary: #2a3441;
            --bg-secondary: #1e2936;
            --bg-header: #1e2936;
            --text-primary: #e8eef3;
            --text-secondary: #94B4C1;
            --border-color: #547792;
            --accent-primary: #94B4C1;
            --shadow-color: rgba(0, 0, 0, 0.3);
        }

        body {
            font-family: 'Noto Sans TC', sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            transition: background-color 0.3s ease, color 0.3s ease;
        }
    </style>
</head>

<body class="min-h-screen flex flex-col">
    
    <!-- Header -->
    <header class="flex justify-between items-center p-4 rounded-xl shadow-sm"
            style="background-color: var(--bg-header); border: 1px solid var(--border-color);">
        <div class="flex items-center gap-3">
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
                    class="px-4 py-2 text-sm rounded-lg transition border flex items-center gap-2"
                    style="color: var(--text-primary); background: transparent; border-color: transparent;">
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

## 📚 參考資源

- [Tailwind CSS 官方文件](https://tailwindcss.com/docs)
- [Font Awesome 圖示庫](https://fontawesome.com/icons)
- [Google Fonts - Noto Sans TC](https://fonts.google.com/noto/specimen/Noto+Sans+TC)

---

## 📌 版本記錄

| 版本 | 日期 | 變更內容 |
| --- | --- | --- |
| 1.0 | 2026-01-05 | 初版發布，基於 index.html 與 tableToMarkdown.html 分析 |

---

**維護者：** Simon Lai  
**最後更新：** 2026-01-05
