// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://3.65.32.166/api/v2/storefront' });

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery,
  endpoints: (builder) => ({
    // POST endpoint
    getProduct: builder.query({
      // eslint-disable-next-line quotes
      query: ({ id }) => {
        return `/products/${id}`
      }
    }),

    getProducts: builder.query({
      // eslint-disable-next-line quotes
      query: () => {
        return "/products"
      },
    }),
  }),
});

export const { useGetProductQuery,useGetProductsQuery } = apiSlice;
