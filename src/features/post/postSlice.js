import { apiSlice } from "../api/apiSlice";


// create post slice
export const postSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "/posts",
            providesTags: (result, error, arg) => ["Posts"],
            keepUnusedDataFor: 300
        }),
        getSinglePost: builder.query({
            query: (id) => `/posts/${id}`,
            providesTags: (result, error, arg) => [{type: "SinglePost", id: arg}],
            keepUnusedDataFor: 300
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: (result, error, arg) => ["Posts"]
        }),
        updatePost: builder.mutation({
            query: (data) => ({
                url: `/posts/${data.id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: (result, error, arg) => ["Posts", "SinglePost"]
        }),
        createPost: builder.mutation({
            query: (data) => ({
                url: `/posts`,
                method: "POST",
                body: data
            }),
            invalidatesTags: (result, error, arg) => ["Posts"]
        })
    })
});

// export hooks
export const {
    useGetAllPostsQuery,
    useGetSinglePostQuery,
    useDeletePostMutation,
    useUpdatePostMutation,
    useCreatePostMutation
 } = postSlice