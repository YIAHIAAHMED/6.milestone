
import './App.css'
import ToDo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
function App() {
  const actors = ['Bappa Raj', 'Omaar sany', 'Salman Shah']
  const singers = [
    { id: 1, name: 'Mahfuj', age: 68},
    { id: 2, name: 'Tahsan', age: 48},
    { id: 3, name: 'Shurvo', age: 58}
  ]


  return (
    <>
    
          <h1>Get started</h1>
          {
            actors.map(actor => <Actor actor={actor} ></Actor>)
          }
          singers.map(singer
          => <Singer></Singer>)

          {

          }



          {/* <ToDo task ='Learn React' isDone={true} ></ToDo>
          <ToDo task ='Revise JS' isDone={false} ></ToDo>
          <ToDo task ='Take a shower' isDone={false}></ToDo> */}

          {/*<Person></Person>
          <Person></Person>
          <Person></Person>
          <Sports></Sports>
          <Pet></Pet>
          <Student></Student>
          <Developer name = 'Mozumder' tech = 'JS'></Developer>
          <Developer name = 'Rajon' tech = 'python'></Developer>
          <Player name = 'tamim' runs = '5000'></Player>
          <Player name = 'Mushi' runs='4000' ></Player>
          <Salami event = 'Roja Eid'  amount = '20' ></Salami>
          <Salami event = 'Graduation' ></Salami>*/}
         
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

function Pet(){
  return(
    <p>Cat</p>
  )
}

function Student(){
  return(
    <div>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Developer(props){
  console.log(props);
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}

// function Player(props){
//   return(
//     <div className='student'>
//         <h3>Name: {props.name} </h3>
//         <h3>Runs: {props.runs} </h3>
//     </div>
//   )
// }
function Player({name, runs}){
  return(
    <div className='student'>
        <h3>Name: {name} </h3>
        <h3>Runs: {runs} </h3>
    </div>
  )
}
const {name, runs} = {name: 'Mozumder', tech: 'Js'} 

function Salami({event, amount = 0}){
  return(
    <div className='student'>
        <p>salami for: {event} </p>
        <p>Amount: {amount} </p>
    </div>
  )
}
export default App
