import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../services/cookies";

export const ApiEcommerce = createApi({
  reducerPath: "ecommerce",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://appgymbackend-production.up.railway.app/",
    // baseUrl: "http://localhost:3001",
    prepareHeaders: (headers) => {
      const token = getToken().token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes:["refresh"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ data, page, size }) => ({
        url: `/products/filter?page=${page}&size=${size}`,
        method: "post",
        body: { filters: data },
      }),
      keepUnusedDataFor: 10,
      providesTags:["refresh"]
    }),
    getFilteredByCategory: builder.query({
      query: (data) => ({
        url: "/products/filter",
        method: "post",
        body: data,
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "get",
      }),
    }),
    postProduct: builder.mutation({
      query: (payload) => ({
        url: `/products`,
        method: "post",
        body: payload
      })
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "delete",
      }),
      invalidatesTag:["refresh"]
    }),
    putProduct: builder.mutation({
      query: ({id,payload}) => ({
        url: `/products/${id}`,
        method: "put",
        body: payload
      }),
      invalidatesTag:["refresh"]
    }),
  }),
});

export const { useGetAllProductsQuery, useGetFilteredByCategoryQuery, useGetProductByIdQuery, usePostProductMutation, useDeleteProductMutation, usePutProductMutation } =
  ApiEcommerce;