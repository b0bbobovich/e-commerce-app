import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userRequest } from '../requestsMethods';

export const addProduct = createAsyncThunk(
  'cart/addProduct',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userRequest().patch(`/cart/${payload.userId}`, payload);
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
  reducers: {
    removeProduct: (state, action) => {
      if (state.quantity > 0) {
        state.quantity -= 1;
        const index = state.products.indexOf(action.payload);
      }
      // state.products.push(action.payload);
      // state.total += action.payload.price * action.payload.quantity;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.isFetching = true;
        state.error = false;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isFetching = false;
        const { _id, ...rest } = action.payload;
        state.items.push(rest);
        state.quantity += 1;
        state.totalPrice += action.payload.price;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        action.payload.products.map((cartItem) => state.items.push(cartItem));
        state.quantity = action.payload.products.length;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export default cartSlice.reducer;
