import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { userRequest } from '../requestsMethods';

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async (payload, { rejectWithValue }) => {
    // console.log('payload', payload);
    try {
      const res = await userRequest().patch(`/cart/${payload.userId}`, payload);
      // console.log('response', res.data);
      return res.data;
    } catch (err) {
      return err.response
        ? rejectWithValue(err.response.data)
        : rejectWithValue(err.message);
    }
  }
);

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userRequest().get(`/cart/find/${payload.userId}`);
      return res.data;
    } catch (err) {
      return err.response
        ? rejectWithValue(err.response.data)
        : rejectWithValue(err.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  'cart/removeProduct',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userRequest().patch(
        `/cart/${payload.userId}/remove/${payload.item._id}`
      );

      return {
        isRemoveSuccessful:
          res.status >= 200 && res.status < 300 ? true : false,
        item: payload.item,
      };
    } catch (err) {
      return err.response
        ? rejectWithValue(err.response.data)
        : rejectWithValue(err.message);
    }
  }
);

// Cart in the state show all products in the cart, not only last added
// Quantity value is a cart items value, not products.
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isFetching: false,
    items: [],
    quantity: 0,
    totalPrice: 0,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateCart.fulfilled, (state, action) => {
        state.isFetching = false;
        const existingItemIndex = state.items.findIndex(
          (item) => item._id === action.payload._id
        );

        if (existingItemIndex !== -1) {
          const oldTotalPrice = state.items[existingItemIndex].price;
          const newTotalPrice = action.payload.price;

          state.items[existingItemIndex] = action.payload;
          state.totalPrice += newTotalPrice - oldTotalPrice;
        } else {
          state.items.push(action.payload);
          state.quantity += 1;
          state.totalPrice += action.payload.price;
        }
      })
      .addCase(getCart.fulfilled, (state, action) => {
        action.payload.products.map((cartItem) => {
          state.items.push(cartItem);
          state.totalPrice += cartItem.price;
        });
        state.quantity = action.payload.products.length;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        if (action.payload.isRemoveSuccessful) {
          state.isFetching = false;
          state.items = state.items.filter(
            (item) => item._id !== action.payload.item._id
          );

          state.totalPrice -= action.payload.item.price;
          state.quantity -= 1;
          state.error = false;
        }
      })
      .addMatcher(
        isAnyOf(updateCart.pending, removeProduct.pending),
        (state) => {
          state.isFetching = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(updateCart.rejected, removeProduct.rejected),
        (state) => {
          state.isFetching = false;
          state.error = true;
        }
      );
  },
});

export default cartSlice.reducer;
