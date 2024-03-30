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

------

Chapter 11
####
TODO: 待補Router用法

------

Chapter 12
#### 
>TIP: 如果您正在使用具有多個欄位的表單，您可能需要考慮使用entries()使用 JavaScript 的方法Object.fromEntries()。例如：
>const rawFormData = Object.fromEntries(formData.entries())
<!-- https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries -->

>要處理類型驗證，您有幾個選擇。雖然您可以手動驗證類型，但使用類型驗證庫可以節省您的時間和精力。對於您的範例，我們將使用Zod，一個 TypeScript 優先的驗證函式庫，可以為您簡化此任務。
<!-- https://zod.dev/ -->

>由於您要更新發票路由中顯示的數據，因此您希望清除此快取並向伺服器觸發新請求。您可以使用revalidatePathNext.js 中的函數來執行此操作：

>ROUTER 導航 redirect

------

Chapter 13
#### 
- 如何使用特殊```error.tsx```檔案來擷取路線段中的錯誤，並向使用者顯示後備 UI
- 何使用```notFound```函數和```not-found```檔案來處理404錯誤（對於不存在的資源）。

.tsx
它接受兩個 props：
error：這個物件是 JavaScript 原生的一個實例Error目的。
reset：這是重置錯誤邊界的功能。執行時，函數將嘗試重新渲染路線段。

要了解有關 Next.js 中錯誤處理的更多信息，請查看以下文件：

[錯誤處理](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
[error.js API參考](https://nextjs.org/docs/app/api-reference/file-conventions/error)
[notFound() API參考](https://nextjs.org/docs/app/api-reference/functions/not-found)
[not-found.js API參考](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

------

Chapter 14
#### 改善無障礙環境

- [TODO:如何eslint-plugin-jsx-a11y與 Next.js 一起使用來實施可訪問性最佳實踐](https://nextjs.org/learn/dashboard-app/improving-accessibility#using-the-eslint-accessibility-plugin-in-nextjs)
- 如何實作伺服器端表單驗證。
- 如何使用 React useFormStatehook 來處理表單錯誤，並將其顯示給使用者。

<!-- prevState- 包含從鉤子傳遞的狀態useFormState。您不會在本例的操作中使用它，但它是必需的道具。 -->

safeParse
safeParse()將會傳回一個包含 asuccess或error欄位的物件。這將有助於更優雅地處理驗證，而無需將此邏輯放入try/catch區塊內。

在上面的程式碼中，您還添加了以下 aria 標籤：

aria-describedby="customer-error"select：這會在元素和錯誤訊息容器之間建立關係。它表明容器id="customer-error"描述了該select元素。當用戶與select框互動時，螢幕閱讀器將閱讀此描述以通知他們錯誤。

id="customer-error"：此id屬性唯一標識儲存輸入錯誤訊息的 HTML 元素select。這是aria-describedby建立關係所必需的。

aria-live="polite"：當更新內部錯誤時，螢幕閱讀器應禮貌地通知使用者div。當內容更改時（例如，當用戶更正錯誤時），螢幕閱讀器將宣布這些更改，但僅在用戶空閒時才進行，以免打斷它們。

------

Chapter 15
#### 如何做身分驗證

>TIP: openssl 生成 請使用gitbash終端機環境操作(git內建了 OpenSSL 工具)

auth.config.ts 是建立在最外層
透過添加signIn: '/login'到我們的pages選項中，用戶將被重定向到我們的自訂登入頁面，而不是 NextAuth.js 預設頁面。

#### 中間層
使用中間層執行的優點是，在中間件驗證身份驗證之前，受保護的路由甚至不會開始渲染，從而增強應用程式的安全性和效能。
- [middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher)
  在這裡，您使用該authConfig物件初始化 NextAuth.js 並匯出該auth屬性。您也可以使用matcher中間件中的選項來指定它應該在特定路徑上運

bcrypt 做密碼雜湊
由於bcrypt 仰賴node.js 而非 Next.js 的中間層，需為此設置一個獨立檔案
bcrypt.compare檢查密碼是否匹配

providers
providers是一個數組，您在其中列出不同的登入選項，例如 Google 或 GitHub。
https://authjs.dev/getting-started/providers/credentials-tutorial
>TIP: 儘管我們使用的是憑證提供程序，但通常建議使用替代提供程序，例如OAuth或電子郵件提供者。請參閱 [NextAuth.js](https://authjs.dev/getting-started/providers) 文檔以獲得完整的選項清單。

zod 驗證格式的libray

>TIP:如果發生'CredentialsSignin'錯誤，您希望顯示適當的錯誤訊息。您可以在文件中了解 [NextAuth.js](https://authjs.dev/reference/core/errors/) 錯誤


TODO: 
[ ] 讀熟這格部分[updating-the-login-form]https://nextjs.org/learn/dashboard-app/adding-authentication#updating-the-login-form

[ ]補上 customers 的內容