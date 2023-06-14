import React from 'react';
import './Posts.scss';
import { Link } from 'react-router-dom';
import { useDeletePostMutation, useGetAllPostsQuery } from './postSlice';

const Posts = () => {

    const { data, isLoading, isSuccess, isError, error } = useGetAllPostsQuery();
    const [deletePost, { isLoading: deleteLoading, isSuccess: deleteSuccess, isError: deleteError } ] = useDeletePostMutation();

    const handleDelete = (postId) => {
        deletePost(postId)
    }

    let postContent = "";

    if (isLoading) {
        postContent = "Loading..."
    }

    if (isSuccess) {
        postContent = (
            data.map((post, index) => {
                return <div className="col-md-12 my-3" key={index}>
                    <div className="card">
                        <div className="card-body">
                            <div className="blog-item">
                                <img src={post?.photo} alt={post?.title} />
                                <div className="blog-info">
                                    <h2>{ post?.title }</h2>
                                    <p>{ post?.content }</p>
                                    <Link to={`/${post?.id}`} className='btn btn-primary' >Read More</Link>
                                    <button onClick={() => handleDelete(post?.id)} className='btn btn-danger' >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        )
    }

    

    return (
        <div className="blog my-5">
            <div className="container">
                <Link to="/create">Create Post</Link>
                <div className="row">
                   {postContent}
                </div>
            </div>
        </div>
    )
};

export default Posts;