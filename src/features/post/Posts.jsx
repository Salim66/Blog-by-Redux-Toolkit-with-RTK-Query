import React from 'react';
import './Posts.scss';
import { Link } from 'react-router-dom';
import { useGetAllPostsQuery } from '../api/apiSlice';

const Posts = () => {

    const { data, isLoading, isSuccess, isError, error } = useGetAllPostsQuery();

    let postContent = "";

    if (isLoading) {
        postContent = "Loading..."
    }

    if (isSuccess) {
        postContent = (
            data.map(({title, photo, content, id}, index) => {
                return <div className="col-md-12 my-3" key={index}>
                    <div className="card">
                        <div className="card-body">
                            <div className="blog-item">
                                <img src={photo} alt={title} />
                                <div className="blog-info">
                                    <h2>{ title }</h2>
                                    <p>{ content }</p>
                                    <Link to={`/${id}`} className='btn btn-primary' >Read More</Link>
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
                <div className="row">
                   {postContent}
                </div>
            </div>
        </div>
    )
};

export default Posts;