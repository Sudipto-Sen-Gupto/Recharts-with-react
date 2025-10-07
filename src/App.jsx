import Linechart from './component/Linechart';
import './App.css'
import { Suspense } from 'react';
const chart=fetch('marks.json').then(res=>res.json())

function App() {
 

  return (
    <>
      <p>Programmer</p>
      <Suspense fallback={<p>Data load</p>}>
        <Linechart chart={chart}></Linechart>
      </Suspense>
    </>
  )
}

export default App
