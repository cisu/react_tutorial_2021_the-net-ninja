import React, { useState,useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);



  


    useEffect(() => {

        setTimeout(() =>{


            fetch('http://localhost:8000/blogs').then(res => {
                return res.json()
            })
            .then((data)=>{
                setBlogs(data)
                setIsPending(false);
            })

        },1000)

     
        
    }, []);


    return (
        <div className='home'>
        {isPending && <div>Loading...</div>}
        {blogs &&
          <BlogList 
          dataBLogs={blogs} 
          title='All Blog!' 
          />}

          
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