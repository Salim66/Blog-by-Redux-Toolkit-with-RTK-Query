import React, { useEffect, useState } from 'react'
import { useGetSinglePostQuery, useUpdatePostMutation } from './postSlice'
import { Link, useParams } from 'react-router-dom';


const EditPost = () => {
    const { id } = useParams();
    const { data, isLoading, isSuccess, isError } = useGetSinglePostQuery(id);
    const [updatePost, { results, isLoading: updateIsLoading, isSuccess: updateIsSuccess, isError: updateIsError }] = useUpdatePostMutation();

    const [input, setInput] = useState({
        title: "",
        photo: "",
        content: "",
        id: ""
    });

    const handleInput = (e) => {
        setInput((prevData) => ({
            ...prevData,
            [e.target.name] : e.target.value
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updatePost(input);
    }

    useEffect(() => {
        if (isSuccess) {
            setInput(data);
        }
    }, [isSuccess]);


  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form action="">
                    <input type="text" name="title" onChange={handleInput} value={input.title} />
                    <input type="text" name="photo" onChange={handleInput} value={input.photo} />
                    <input type="text" name="content" onChange={handleInput} value={input.content} />
                    <button onClick={handleFormSubmit}>Update Post</button>
                    <Link to="/">Back</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditPost