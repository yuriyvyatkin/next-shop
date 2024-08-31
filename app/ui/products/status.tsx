'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

export default function ProductStatus({ id }: { id: number }) {
  // Access the basket state from the Redux store
  const basketIds = useSelector((state: RootState) => state.basket.ids);

  // Check if the product ID is in the basket
  const isInCart = basketIds.includes(id);

  return (
    <>
      {isInCart && (
        <span className='inline-flex items-center rounded-full px-2 py-1 text-xs bg-green-500 text-white absolute right-2 bottom-2'>
          In Cart
          <CheckIcon className="ml-1 w-4 text-white" />
        </span>
      )}
    </>
  );
}
