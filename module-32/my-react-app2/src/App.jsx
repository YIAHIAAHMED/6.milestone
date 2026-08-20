import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './friends';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json()
}

function App() {
  const friendsPromise = fetchFriends()

  function handleClick(){
    alert('I am a click')
  }

  // most of case e eta use korbo
  const handleClick3 = () =>{
    alert('Clicked 3')
  }

  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
      <h1>Get started Vite + React</h1>
      <Counter></Counter>
      <Batsman></Batsman>
      
      <Suspense fallback={<h3>Friends coming</h3>}>
        <Friends friendsPromise={friendsPromise} ></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>
      
      <button onClick={handleClick}>Click Me</button>
      
      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => handleAdd5(10) } > Click me Add 5 </button>

    </>
  )
}

export default App
