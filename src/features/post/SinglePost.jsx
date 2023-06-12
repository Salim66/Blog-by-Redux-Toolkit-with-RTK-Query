import React from 'react';
import './Posts.scss';
import { Link } from 'react-router-dom';

const SinglePost = () => {
    return (
        <div className="blog my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="blog-single-item">
                                    <img className='' src="https://media.istockphoto.com/id/1342418985/photo/portrait-of-successful-female-business-team-in-office.jpg?s=170667a&w=0&k=20&c=j49RNtodN8WLYIM4Gt3c3hJGMofD09aJHVOxxnwJ8pM=" alt="blog post" />
                                    <div className="blog-info">
                                        <h2>This is may first blog</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae veniam voluptates saepe eos eligendi sint expedita cupiditate est sed.</p>
                                        <Link to="/" className="btn btn-primary" >Back Posts</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SinglePost;