import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './friends';
import Posts from './Posts';
import Players from './Players';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fetchPosts = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

function App() {
  // const friendsPromise = fetchFriends();

  // const postPromise = fetchPosts();

  function handleClick() {
    alert('I am a click');
  }

  const handleClick3 = () => {
    alert('Clicked 3');
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>Get started Vite + React</h1>
      <Players></Players>

      {/* <Suspense fallback ={<h4>Post are coming..</h4>} >
        <Posts postPromise={postPromise} ></Posts>

      </Suspense> */}

      <Counter />
      <Batsman />

      {/* <Suspense fallback={<h3>Friends coming</h3>}>
        <Friends friendsPromise={friendsPromise} />
      </Suspense> */}

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => handleAdd5(10)}>
        Click me Add 5
      </button>
    </>
  )
}

export default App