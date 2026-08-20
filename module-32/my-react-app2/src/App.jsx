import './App.css'

function App() {

  function handleClick(){
    alert('I am a click')
  }
  return (
    <>
      <h1>Get started Vite + React</h1>
      
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
