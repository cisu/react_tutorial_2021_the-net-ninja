import React, { useState } from 'react'

const Home = () => {


    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25)


    const handleClick = () => {
      setName('luigi')
      setAge(30)
    }

    return (
        <div className='home'>
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
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