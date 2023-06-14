import React, { useState } from 'react'
import { useCreatePostMutation } from './postSlice'
import { Link } from 'react-router-dom';


const CreatePost = () => {

    const [createPost, { isLoading, isSuccess, isError }] = useCreatePostMutation();

    const [input, setInput] = useState({
        title: "",
        photo: "",
        content: ""
    });

    const handleInput = (e) => {
        setInput((prevData) => ({
            ...prevData,
            [e.target.name] : e.target.value
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        createPost(input);
    } 

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form action="">
                    <input type="text" name="title" onChange={handleInput} />
                    <input type="text" name="photo" onChange={handleInput} />
                    <input type="text" name="content" onChange={handleInput} />
                    <button onClick={handleFormSubmit}>Create Post</button>
                    <Link to="/">Back</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePost