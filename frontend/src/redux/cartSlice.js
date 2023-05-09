import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { userRequest } from "../requestsMethods";

export const addProduct = createAsyncThunk(
    "cart/addProduct",
    async (payload) => {
        try {
            const res = await userRequest().patch(`/cart/${payload.userId}`, payload);
            console.log(res.data)
            return res.data 
        }
        catch (err) {
            throw err
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isFetching: false,
        products: [],
        quantity: 0,
        total: 0,
        error: false
    },
    reducers: {

        removeProduct: (state, action) => {
            if (state.quantity > 0) {
                state.quantity -= 1;
                const index = state.products.indexOf(action.payload);

            };
            // state.products.push(action.payload);
            // state.total += action.payload.price * action.payload.quantity;
        },
        extraReducers: (builder) => {
            builder
                .addCase(addProduct.pending, (state) => {
                    state.isFetching = true;
                    state.error = false;
                })
                .addCase(addProduct.fulfilled, (state, action) => {
                    state.isFetching = false;
                    state.products.push(action.payload);
                    state.quantity += 1;
                    state.total += action.payload.price * action.payload.quantity;
                })
                .addCase(addProduct.rejected, (state, action) => {
                    state.isFetching = false;
                    state.error = true;
                })
          }
    }
})

export default cartSlice.reducer;