import Linechart from './component/Linechart';
import './App.css'
import { Suspense } from 'react';
import axios from 'axios'
import Marks from './component/marks/Marks';
const chart=axios.get('marks.json');

function App() {
 

  return (
    <>
      <p>Programmer</p>
      <Suspense fallback={<p>Data load</p>}>
        <Linechart ></Linechart>
      </Suspense>
      <Suspense fallback={<p>Data is loading</p>}>
        <Marks chart={chart}></Marks>
      </Suspense>
    </>
  )
}

export default App
