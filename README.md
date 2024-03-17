## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


### Note

Chapter 7
Fetching Data

預設情況下，Next.js 應用程式使用React Server Components。使用伺服器元件來取得資料是一種相對較新的方法，使用它們有一些好處：

- 伺服器元件支援 Promise，為資料取得等非同步任務提供更簡單的解決方案。您可以使用```async/await```語法，而無需使用```useEffect```、```useState``或資料取得庫。
- 伺服器元件在伺服器上執行，因此您可以將昂貴的資料擷取和邏輯保留在伺服器上，並且僅將結果傳送到客戶端。
- 如前所述，由於伺服器元件在伺服器上執行，因此您可以直接查詢資料庫，而無需額外的 API 層。

------

Chapter 8
#### 使儀表板動態化
預設情況下，@vercel/postgres不設定自己的快取語意。這允許框架設定自己的靜態和動態行為。
您可以使用在伺服器元件或資料擷取函數中呼叫的 Next.js API ```unstable_noStore```來選擇退出靜態渲染。讓我們添加這個。

在您的 中```data.ts```，導入```unstable_noStore``` from ```next/cache```，並將其稱為資料獲取函數的頂部：

>注意： unstable_noStore是一個實驗性 API，將來可能會改變。如果您喜歡在自己的專案中使用穩定的 API，您也可以使用Segment Config Option export const dynamic = "force-dynamic"


Chapter 8
#### fix錯誤骨架
https://nextjs.org/learn/dashboard-app/streaming#fixing-the-loading-skeleton-bug-with-route-groups
設定/(overview) 資料夾可以將避免其他子目錄資料夾被共用到loading.tsx 上