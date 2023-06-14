import React from 'react';
import './Posts.scss';
import { Link, useParams } from 'react-router-dom';
import { useGetSinglePostQuery } from './postSlice';

const SinglePost = () => {

    const { id } = useParams();

    const { data, isLoading, isSuccess, isError, error } = useGetSinglePostQuery(id);

    let postContent = "";

    if (isLoading) {
        postContent = "Loading..."
    }

    if (isSuccess) {
        postContent = (
            <div className="blog-single-item">
                <img src={data.photo} alt={data.title} />
                <div className="blog-info">
                    <h2>{ data.title }</h2>
                    <p>{ data.content }</p>
                    <Link to="/" className="btn btn-primary" >Back Posts</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="blog my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-3">
                        <div className="card">
                            <div className="card-body">
                               {postContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SinglePost;