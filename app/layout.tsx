import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 透過添加Inter到<body>元素，字體將應用於整個應用程式。在這裡，您還添加了 Tailwindantialiased平滑字體的類別。沒有必要使用這個類，但它增加了一個不錯的感覺。

導航到瀏覽器，開啟開發工具並選擇body元素。您應該看到Inter並且Inter_Fallback現在已套用在樣式下。 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
