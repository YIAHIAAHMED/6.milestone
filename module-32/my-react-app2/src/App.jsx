import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';

function App() {

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
      
      <button onClick={handleClick}>Click Me</button>
      
      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => handleAdd5(10) } > Click me Add 5 </button>

    </>
  )
}

export default App
