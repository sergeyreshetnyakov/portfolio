import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IProduct {
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   rating: {
      rate: number;
      count: number;
   };
}

export const storeApi = createApi({
   reducerPath: "storeApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://fakestoreapi.com/",
   }),
   endpoints: (builder) => ({
      getProducts: builder.query<IProduct[]>({
         query: (amount) => "products?limit=${amount}",
      }),
   }),
});

export const { useGetProductsQuery } = storeApi;
