import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import Pagination from '@/app/ui/products/pagination';
import Search from '@/app/ui/search';
import Tile from '@/app/ui/products/tile';
import SortBtn from '@/app/ui/products/buttons/SortBtn';
import { lusitana } from '@/app/ui/fonts';
import { CardsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchTotalPages } from '@/app/lib/data';
import { Metadata } from 'next';
import Counter from '@/app/ui/products/counter';

export const metadata: Metadata = {
  title: 'Products',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    sort?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const sort = searchParams?.sort === 'true';

  const totalPages = await fetchTotalPages(query);

  return (
    <div className="w-full max-w-screen-xl mx-auto py-10">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
        <Counter />
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search products by title..." />
        <SortBtn currentPage={currentPage} sort={sort} />
      </div>
      <Suspense key={query + currentPage} fallback={<CardsSkeleton />}>
        <Tile query={query} currentPage={currentPage} sort={sort} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
