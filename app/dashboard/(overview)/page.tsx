// import { Card } from '@/app/ui/dashboard/cards';
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchRevenue,fetchLatestInvoices,fetchCardData  } from '@/app/lib/data';
import { fetchCardData } from '@/app/lib/data'; // remove fetchRevenue 
import { Suspense } from 'react';
import { RevenueChartSkeleton,CardsSkeleton,InvoiceSkeleton } from '@/app/ui/skeletons';

// 頁面是一個非同步元件。這允許您使用await來獲取數據
export default async function Page() {
  // const revenue = await fetchRevenue();
  // const cardData = await fetchCardData();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

    // 但是...您需要注意兩件事：

    // 資料請求無意中互相阻塞，形成請求瀑布。(因為都是await)
    // 預設情況下，Next.js預先渲染路由以提高效能，稱為靜態渲染。因此，如果您的資料發生變化，它不會反映在您的儀表板中。
    // 請求瀑布(request waterfalls?):https://nextjs.org/learn/dashboard-app/fetching-data#what-are-request-waterfalls

    // 避免瀑布的常見方法是同時發起所有資料請求 - 並行。
    // 在 JavaScript 中，您可以使用Promise.all()或者Promise.allSettled()同時啟動所有承諾的功能。例如，在 中data.ts，我們Promise.all()在fetchCardData()函數中使用：
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoiceSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}