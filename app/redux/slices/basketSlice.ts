import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BasketState {
  ids: number[];
}

const initialState: BasketState = {
  ids: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    /**
     * Toggle the presence of an item in the basket.
     * If the item is already in the basket, it will be removed.
     * If the item is not in the basket, it will be added.
     */
    toggleBasketItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.ids.includes(id)) {
        // Remove the item if it is already in the basket
        state.ids = state.ids.filter(existingId => existingId !== id);
      } else {
        // Add the item if it is not in the basket
        state.ids.push(id);
      }
    },
  },
});

export const { toggleBasketItem } = basketSlice.actions;
export default basketSlice.reducer;
