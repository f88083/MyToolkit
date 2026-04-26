# My Toolkit - 線上工具箱

這是一套由 AI 輔助開發的網頁工具集，旨在提供簡單、好用且注重隱私的線上工具。所有的工具都設計為**完全在瀏覽器端執行**，確保您的資料永遠不會被上傳到任何伺服器。

## 🛠️ 工具列表

目前包含以下實用工具：

- **[Markdown 表格生成器](tableToMarkdown.html)**
  - 視覺化的表格編輯器，支援右鍵選單操作。
  - 可快速將 Excel 或手動輸入的內容轉為 Markdown 語法。

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

- **[Folder Path to Name](pathToName.html)**
  - 將路徑轉換為資料夾名稱，適合備份命名使用。

- **[PDF 壓縮器](compressPdf.html)**
  - 在本機端壓縮 PDF 檔案，減少檔案大小。
  - 支援自訂壓縮比例，特別適合處理包含大量圖片的掃描檔。

## 🔒 隱私與安全

本專案最核心的設計原則是 **「本機優先 (Local-First)」**：

- ✅ **零上傳**：所有檔案處理邏輯都在您的瀏覽器 (Client-side) 完成。
- ✅ **無後端**：沒有後端伺服器接收您的資料。
- ✅ **安全**：您的敏感資料（如圖片、文件）永遠不會離開您的電腦。

## 💻 技術棧

- **Core**: HTML5, Vanilla JavaScript
- **Styling**: Tailwind CSS, Font Awesome
- **Libraries**:
  - Tesseract.js (OCR)
  - SparkMD5 (Hash)
  - jsPDF & pdf.js (PDF Generation & Processing)
  - Diff.js (Diffing)

## 🚀 如何使用

### 線上使用
直接存取 GitHub Pages 連結（若已部署）。

### 本機執行
1. Clone 此專案到本機：
   ```bash
   git clone https://github.com/f88083/MyToolkit.git
   ```
2. 直接用瀏覽器開啟 `index.html` 即可使用。

## 📝 授權

本專案採用 [MIT License](LICENSE) 開源授權，歡迎自由使用與分享。

---
Developed by [Simon Lai](https://github.com/f88083)
