'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { toggleBasketItem } from '@/app/redux/slices/basketSlice';

export default function AddToCartBtn({ id }: { id: number }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleBasketItem(id));
  };

  return (
    <button className="rounded-md border p-2 hover:bg-gray-100" onClick={handleClick} title="Add to Cart">
      <span className="sr-only">Add to Cart</span>
      <ShoppingCartIcon className="w-5" />
    </button>
  );
}
