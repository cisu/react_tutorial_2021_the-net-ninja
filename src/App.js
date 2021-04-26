
import './App.css';

function App() {

  const title = 'Welcome to the new blog';
  const likes = 50;
  
  // we can't do this 
  // const person = {name: 'george', age: 30}

  const link = 'https://www.google.com'

  return (
    <div className="App">
     <div className="content">
       <h1>{title}</h1>
       <p>Liked {likes} times</p>

       {/* <p>{person}</p> */}

      <p>{ 10 }</p>
      <p>{ 'Hello ninjas' }</p>
      <p>{ [1,2,3,4,5] }</p>
      <p>{ Math.random() * 10 }</p>

      <a href={link}>google</a>

     </div>
    </div>
  );
}

export default App;
