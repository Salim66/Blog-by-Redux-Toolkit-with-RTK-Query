import { apiSlice } from "../api/apiSlice";


// create post slice
export const postSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "/posts",
            providesTags: ["Posts"],
            keepUnusedDataFor: 300
        }),
        getSinglePost: builder.query({
            query: (id) => `/posts/${id}`,
            providesTags: ["SinglePost"],
            keepUnusedDataFor: 300
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Posts"]
        }),
        createPost: builder.mutation({
            query: (data) => ({
                url: `/posts`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Posts"]
        })
    })
});

// export hooks
export const {
    useGetAllPostsQuery,
    useGetSinglePostQuery,
    useDeletePostMutation,
    useCreatePostMutation
 } = postSlice