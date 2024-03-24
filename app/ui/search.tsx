'use client';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  // 何時使用useSearchParams()鉤子與searchParams道具？
  // 您可能已經注意到您使用了兩種不同的方法來提取搜尋參數。使用其中之一取決於您是在客戶端還是在伺服器上工作。
  // <Search>是一個客戶端元件，因此您使用useSearchParams()鉤子從客戶端存取參數。
  // <Table>是一個獲取自己資料的伺服器元件，因此您可以將searchParamsprop 從頁面傳遞到元件。
  // 作為一般規則，如果您想從客戶端讀取參數，請使用鉤子，useSearchParams()因為這樣可以避免返回伺服器。

  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    // console.log(term);
    const params = new URLSearchParams(searchParams);
    // URLSearchParams是一個 Web API，提供用於操作 URL 查詢參數的實用方法。您可以使用它來獲取 params 字串，
    params.set('page', '1');
    // 而不是創建複雜的字串文字，例如?page=1&query=a.
    // 接下來，set基於使用者輸入的參數字串。如果輸入為空，您需要delete：
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
    // ${pathname}是當前路徑，在您的情況下，"/dashboard/invoices".
    // 當使用者在搜尋欄中鍵入內容時，params.toString()會將輸入內容轉換為 URL 友善的格式。
    // replace(${pathname}?${params.toString()})使用使用者的搜尋資料更新 URL。
    // 例如，/dashboard/invoices?query=lee如果使用者搜尋“Lee”。
    // 由於 Next.js 的客戶端導航（您在頁面之間導航的章節中了解過），無需重新載入頁面即可更新 URL 。
  }, 300);
 
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      {/* defaultValue與value/受控與不受控
          如果您使用狀態來管理輸入的值，則可以使用該value屬性使其成為受控元件。這意味著 React 將管理輸入的狀態。
          但是，由於您沒有使用狀態，因此可以使用defaultValue. 這意味著本機輸入將管理其自己的狀態。這沒問題，因為您將搜尋查詢儲存到 URL 而不是狀態。 */}
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}