import { useState } from "react"
import './App.css';


function App() {
  const [num, setNum] = useState(0)
  
  const changeNumber = () =>{
    setNum(num + 1)
  }

  return (
    <>
      <h1>{num}</h1>
      <h1>{num}</h1>
      <h1>{num}</h1>
      <h1>{num}</h1>
      <h1>{num}</h1>
      <button onClick={changeNumber} >Change Number </button>
    </>
  )
}

export default App
