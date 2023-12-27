import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://boboshop-api.onrender.com/api/v1',
  baseUrl: "http://localhost:5000/v1",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.currentUser.accessToken;
    // console.log("token: ",token)
    if (token) {
      headers.set('token', `Bearer ${token}`);
    }
    return headers;
  },
});

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQuery,
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: (builder.query({
      query: () => "/products",
      providesTags: ["Products"]
    })),
    deleteProduct: (builder.mutation({
      query(id) {
        return {
          url: `/products/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ["Products"]
    })),
    updateProduct: (builder.mutation({
      query(formData) {
        const { _id, ...data } = formData;
        return {
          url: `/products/${_id}`,
          method: 'PUT',
          body: data,
        }
      },
      invalidatesTags: ["Products"]
    }))
  }),

});

export const { useGetProductsQuery, useDeleteProductMutation, useUpdateProductMutation } = productApi;

// import { createSlice } from "@reduxjs/toolkit";
// export const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [],
//     isFetching: false,
//     error: false,
//   },
//   reducers: {
//     //GET ALL
//     getProductStart: (state) => {
//       state.isFetching = true;
//       state.error = false;
//     },
//     getProductSuccess: (state, action) => {
//       state.isFetching = false;
//       state.products = action.payload;
//     },
//     getProductFailure: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//     //DELETE
//     deleteProductStart: (state) => {
//       state.isFetching = true;
//       state.error = false;
//     },
//     deleteProductSuccess: (state, action) => {
//       state.isFetching = false;
//       state.products.splice(
//         state.products.findIndex((item) => item._id === action.payload),
//         1
//       );
//     },
//     deleteProductFailure: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//     //UPDATE
//     updateProductStart: (state) => {
//       state.isFetching = true;
//       state.error = false;
//     },
//     updateProductSuccess: (state, action) => {
//       state.isFetching = false;
//       state.products[
//         state.products.findIndex((item) => item._id === action.payload.id)
//       ] = action.payload.product;
//     },
//     updateProductFailure: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//     //UPDATE
//     addProductStart: (state) => {
//       state.isFetching = true;
//       state.error = false;
//     },
//     addProductSuccess: (state, action) => {
//       state.isFetching = false;
//       state.products.push(action.payload);
//     },
//     addProductFailure: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//   },
// });

// export const {
//   getProductStart,
//   getProductSuccess,
//   getProductFailure,
//   deleteProductStart,
//   deleteProductSuccess,
//   deleteProductFailure,
//   updateProductStart,
//   updateProductSuccess,
//   updateProductFailure,
//   addProductStart,
//   addProductSuccess,
//   addProductFailure,
// } = productSlice.actions;

// export default productSlice.reducer;