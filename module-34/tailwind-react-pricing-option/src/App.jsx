
import { Suspense } from 'react';
import './App.css'
import DaisyUi from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultCharts from './components/ResultCharts/ResultCharts';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

const pricingPromise = fetch('PricingData.json').then(res => res.json());

const marksPromise = axios.get('marksData.json');

function App() {


  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyUi></DaisyUi> */}
        
      </header>


      <main>
          <Suspense fallback={<span class="loading loading-spinner loading-lg"></span>} >
            <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
          </Suspense>

          <Suspense fallback={<span class="loading loading-spinner loading-lg"></span>} >
            <MarksChart marksPromise= {marksPromise} ></MarksChart>
          </Suspense>
          
          <ResultCharts></ResultCharts>
      </main>

    </>
  )
}

export default App
