
import { Suspense } from 'react';
import './App.css';
import FoodSection from './componests/FoodSection/FoodSection';
import Navbar from './componests/Navbar/Navbar';

const foodDatares = fetch('https://themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<p>Loading...</p>} >
        <FoodSection foodDatares={foodDatares} ></FoodSection>
      </Suspense>
      
      
    </>
  )
}

export default App
