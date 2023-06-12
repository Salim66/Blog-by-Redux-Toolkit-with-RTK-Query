import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// create api slice
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "/posts"
        })
    })
});

// export hooks
export const { useGetAllPostsQuery } = apiSlice;