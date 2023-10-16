import { createSlice } from '@reduxjs/toolkit';
import { AddToCart, GetCartList } from './AsyncThunks';
import { CartType } from '../../../Types/Redux/Cart';

const initialState: CartType = {
  cartStatus: 'INACTIVE',
  alert: false,
  cart: [],
  total: 0,
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddToLocalCart: (state, { payload }) => {
      const ItemExist = state.cart.find((state) => state.id === payload.cart.id);
      if (ItemExist) {
        ItemExist.amount = payload.cart.amount + ItemExist.amount;
        state.cart = state.cart.filter((state) => state.id !== payload.cart.id);
        state.cart.push(ItemExist);
      } else {
        state.cart.push(payload.cart);
      }
      let total = 0;
      for (let i = 0; i < state.cart.length; i++) {
        const amount = state.cart[i].amount;
        const price = state.cart[i].product.price;
        const itemPrice = amount * price;
        total = +itemPrice;
      }
      state.total = total;
      sessionStorage.setItem('cart', JSON.stringify(state.cart));
      sessionStorage.setItem('total', JSON.stringify(state.total));
    },
    RemoveFromLocalCart: (state, { payload }) => {
      state.cart = state.cart.filter((state) => state.id !== payload.id);
      let total = 0;
      for (let i = 0; i < state.cart.length; i++) {
        const amount = state.cart[i].amount;
        const price = state.cart[i].product.price;
        const itemPrice = amount * price;
        total = +itemPrice;
      }
      state.total = total;
      sessionStorage.setItem('cart', JSON.stringify(state.cart));
      sessionStorage.setItem('total', JSON.stringify(state.total));
    },
    UpdateLocalCart: (state, { payload }) => {
      const ItemExist = state.cart.find((state) => state.id === payload.cart.id);
      if (ItemExist) {
        ItemExist.amount = payload.cart.amount + ItemExist.amount;
        state.cart = state.cart.filter((state) => state.id !== payload.cart.id);
        state.cart.push(ItemExist);
      }
      sessionStorage.setItem('cart', JSON.stringify(state.cart));
      sessionStorage.setItem('total', JSON.stringify(state.total));
    },
    GetCartFromStorage: (state, { payload }) => {
      state.cart = payload.cart;
      state.total = payload.total;
    },
    ClearCart: (state) => {
      state.cart = [];
      state.total = 0;
      sessionStorage.clear();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(GetCartList.fulfilled, (state) => {
        state.cartStatus = 'SUCCESSFUL';
      })
      .addCase(GetCartList.rejected, (state: { cartStatus: string }) => {
        state.cartStatus = 'FAILURE';
      })
      .addCase(GetCartList.pending, (state: { cartStatus: string }) => {
        state.cartStatus = 'PENDING';
      })
      .addCase(AddToCart.pending, (state: { cartStatus: string }) => {
        state.cartStatus = 'PENDING';
      })
      .addCase(AddToCart.rejected, (state: { cartStatus: string }) => {
        state.cartStatus = 'FAILURE';
      })
      .addCase(AddToCart.fulfilled, (state: { cartStatus: string; alert: boolean }) => {
        state.cartStatus = 'SUCCESSFUL';
        state.alert = true;
      })
      .addDefaultCase((state: { cartStatus: string; alert: boolean }) => {
        state.cartStatus = 'INACTIVE';
        state.alert = false;
      });
  },
});
export const { AddToLocalCart, RemoveFromLocalCart, GetCartFromStorage, ClearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
