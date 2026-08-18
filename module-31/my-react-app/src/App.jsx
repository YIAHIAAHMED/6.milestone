
import './App.css'

function App() {

  return (
    <>
          <h1>Get started</h1>
          <Person></Person>
          <Person></Person>
          <Person></Person>
          <Sports></Sports>
    </>
  )
}
function Person(){
  const age = 17;
  const name = 'Yiahia';
  return (
    <p>I am a Person :{age} {name} </p>
  )
}

function Sports(){

  return(
    <div>
      <h3>Cricket</h3>
      <p>Playing and losing</p>
    </div>
  )

}

export default App
