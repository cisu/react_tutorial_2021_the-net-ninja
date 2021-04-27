import React, { useState,useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'george', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);
    }


    useEffect(() => {
        console.log('use effect run');
        console.log(blogs);
    });


    return (
        <div className='home'>
          <BlogList 
          dataBLogs={blogs} 
          title='All Blog!' 
          handleDelete={handleDelete}
          />
          {/* <BlogList 
          dataBLogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"
          handleDelete={handleDelete}
          /> */}
        </div>
    )    
}

export default Home




/*
Event objet inside these functions when an event occurs

In this because we don't automatically get the event object as a first argument

This below arrow function take the event object automatically, then if we want to use it inside our custom function we just pass it in as an argument like this 

(e) => {handleClickAgain('mario', e )}

And then we use it inside the function above the return like this
(see the e)
   const handleClickAgain = (name , e) => {
        console.log(`Hello ${name}`, e.target);
    }



const handleClickAgain = (name , e) => {
console.log(`Hello ${name}`, e.target);
}

<button onClick={(e) => {handleClickAgain('mario', e )}}>Click me again</button>





*/