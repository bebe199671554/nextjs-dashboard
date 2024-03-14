import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
// 首先，您將<SideNav />元件匯入到佈局中。您匯入到此文件中的任何元件都將成為佈局的一部分。
// 該<Layout />組件接收一個childrenprop。此子項可以是頁面或其他佈局。在您的情況下，裡面的頁面/dashboard將自動嵌套在<Layout />如下內容中：

// 在 Next.js 中使用佈局的好處之一是，在導航時，只有頁面元件會更新，而佈局不會重新呈現。這稱為部分渲染：
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#3-partial-rendering