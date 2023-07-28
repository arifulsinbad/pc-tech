// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllPc: builder.query({
      query: () => "/allPc",
    }),
    getCatagory: builder.query({
      query: (id) => `/${id}`,
    }),
    getCatagoryId: builder.query({
      query: (quary) => `/${quary[0]}/${quary[1]}`,
    }),
    getPc: builder.query({
      query: (id) => `/allPc/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPcQuery,
  useGetPcQuery,
  useGetCatagoryQuery,
  useGetCatagoryIdQuery,
} = apiSlice;
