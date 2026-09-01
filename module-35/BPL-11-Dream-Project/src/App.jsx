
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players';
import Navbar from './components/navbar/Navbar'
import axios from "axios";

const fetchPlayer = axios.get('/module-35/BPL-11-Dream-Project/Data.json')

function App() {
  const playerPromise = fetchPlayer;

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
    <Players playerPromise={playerPromise} ></Players>
    </>
  )
}

export default App
