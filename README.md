# My Toolkit - 線上工具箱

這是一套由 AI 輔助開發的網頁工具集，旨在提供簡單、好用且注重隱私的線上工具。所有的工具都設計為**完全在瀏覽器端執行**，確保您的資料永遠不會被上傳到任何伺服器。

## 🛠️ 工具列表

目前包含以下實用工具：

- **[Markdown 表格生成器](tableToMarkdown.html)**
  - 視覺化的表格編輯器，支援右鍵選單操作。
  - 可快速將 Excel 或手動輸入的內容轉為 Markdown 語法。
  - Excel 資料透過複製、貼上匯入，不支援直接讀取 `.xls` 或 `.xlsx` 檔案。

- **[JSON 格式化工具](jsonFormatter.html)**
  - 專業的 JSON 編輯器。
  - 支援語法高亮、行號顯示、即時驗證與代碼摺疊。

- **[Image to Text (OCR)](imageToText.html)**
  - 上傳圖片自動擷取文字。
  - 支援繁簡中文、英文、日文、韓文。
  - 辨識結果盡量保留原始排版格式。

- **[Hash 比較器](hashCompare.html)**
  - 計算並比較兩個檔案的 Hash 值。
  - 支援 MD5, SHA1, SHA256, SHA512。
  - 快速驗證檔案完整性。

- **[Diff 比較器](diffCompare.html)**
  - Git Diff 風格的文字/檔案差異比較。
  - 支援多種程式語言檔案。

- **[Images to PDF](imagesToPdf.html)**
  - 將多張圖片合併成單一 PDF 文件。
  - 支援拖曳排序與自訂頁面設定。
  - 可調整 JPEG 輸出畫質；圖片會轉成 JPEG 後加入 PDF。

- **[Folder Path to Name](pathToName.html)**
  - 將路徑轉換為資料夾名稱，適合備份命名使用。

- **[PDF 壓縮器](compressPdf.html)**
  - 在本機端將 PDF 每頁轉成約 108 DPI 的 JPEG 圖片，再重建 PDF，適合處理掃描文件。
  - 可調整 JPEG 畫質（10–100%）並預估輸出大小；此百分比不是檔案縮小比例，輸出也不保證比原檔小。
  - 輸出為圖片式 PDF，原有文字層、向量圖形與互動功能不會保留；文字無法直接選取或搜尋。

- **[PDF to PowerPoint](pdfToPpt.html)**
  - 將 PDF 每一頁轉成一張高畫質 PowerPoint 投影片。
  - 支援輸出品質與投影片比例設定，全程在瀏覽器本機處理。
  - 每張投影片是一張整頁圖片，文字、表格與圖形無法個別編輯。

- **[AI Resources](aiResources.html)**
  - 瀏覽、搜尋精選的 AI Skill、Agent 與 Framework。
  - 支援類型與用途篩選，資源清單來自專案內的 `data/ai-resources.md`。
  - 需要透過 HTTP/HTTPS 存取，才能載入資源清單。

## 🔒 隱私與安全

本專案最核心的設計原則是 **「本機優先 (Local-First)」**：

- ✅ **零上傳**：所有檔案處理邏輯都在您的瀏覽器 (Client-side) 完成。
- ✅ **無後端**：沒有後端伺服器接收您的資料。
- ✅ **安全**：您的敏感資料（如圖片、文件）永遠不會離開您的電腦。

Tailwind 樣式由網站本身提供靜態 CSS；Font Awesome、字型與其他 JavaScript 套件仍透過 CDN 載入，OCR 也需要下載語言模型。因此使用時仍需要網路連線，本機處理不代表完全離線使用。

## 💻 技術棧

- **Core**: HTML5, Vanilla JavaScript
- **Styling**: Tailwind CSS 3.4.17（預先編譯的靜態 CSS）, Font Awesome
- **Libraries**:
  - Tesseract.js (OCR)
  - SparkMD5 (Hash)
  - jsPDF & pdf.js (PDF Generation & Processing)
  - PptxGenJS (PowerPoint Generation)
- **Diff 演算法**：自行實作 LCS（最長共同子序列），用於行與字元層級的差異比較。

## 🚀 如何使用

### 線上使用
直接存取 GitHub Pages 連結（若已部署）。

### 本機執行
1. Clone 此專案到本機：
   ```bash
   git clone https://github.com/f88083/MyToolkit.git
   ```
2. 進入專案目錄，啟動本機靜態 HTTP 伺服器（以下範例需要 Python 3）：
   ```bash
   cd MyToolkit
   python3 -m http.server 8000 --bind 127.0.0.1
   ```
3. 用瀏覽器開啟 `http://localhost:8000/`。

請保持網路連線，以載入 CDN 套件與 OCR 語言模型。直接以 `file://` 開啟 `index.html` 無法完整使用所有工具，例如 AI Resources 的資源清單可能會被瀏覽器的安全限制阻擋。

### 開發與更新 Tailwind 樣式

已編譯的 `assets/css/tailwind.css` 隨專案提供，瀏覽網站不需要 Node.js，也不會在瀏覽器執行 Tailwind 編譯。

修改 HTML 或 JavaScript 中的 Tailwind class 後，可在專案目錄使用 Node.js 22 與 npm 重建樣式：

```bash
npm ci
npm run build:css
```

開發時可執行 `npm run watch:css`，在修改 class 後自動重建 CSS。自訂配色集中在 `tailwind.config.js`；Tailwind 指令來源是 `assets/css/tailwind.input.css`。請保留完整 class 名稱（例如 `text-red-500`），避免動態拼接，以便建置工具掃描。

提交時請包含產生的 `assets/css/tailwind.css`。GitHub Actions 會在 PR 檢查 CSS 是否與來源一致；相關來源推送到 `master` 後，則會自動重建、提交有變更的 CSS，並請求 GitHub Pages 重新建置。此流程沿用從 `master` 根目錄部署的 GitHub Pages 設定；需要啟用 Actions，並允許 workflow 的 `contents: write` 與 `pages: write` 權限。若 Actions 未啟用，請在本機重建並提交 CSS。

## 📝 授權

本專案採用 [MIT License](LICENSE) 開源授權，歡迎自由使用與分享。

---
Developed by [Simon Lai](https://github.com/f88083)
