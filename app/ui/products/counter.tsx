'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

export default function CartItemCount() {
  const itemsCount = useSelector((state: RootState) => state.basket.ids.length);

  return (
    <div className="cart-item-count">
      Cart items: {itemsCount}
    </div>
  );
}
