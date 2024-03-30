import Table from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/data';


export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div className="w-full">
      {/* FIXME: 找到正確的customer資料 */}
       {/* <Table customers={customers} /> */}
    </div>
  );
}