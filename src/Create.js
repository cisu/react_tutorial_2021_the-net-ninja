import React, { useState } from 'react'

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        console.log(blog);
    
    }


    return (
        <div className='create'> 
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog title:</label>
                <input 
                    type="text" 
                    id="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="body">Blog body:</label>
                <textarea  
                    id="body"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    >
                </textarea>

                <label htmlFor="author">Blog author:</label>
                <select 
                id="author" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}

export default Create
