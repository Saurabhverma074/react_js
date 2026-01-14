import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useState(15)
 let [counter,setCounter]=useState(15);

/// setCounter koi value nhi hai kch bhi likh sakte hai
// waise counter ke align likhte hai 



  // let counter=15

  const addValue=()=>{
    console.log("clicked",counter);
    // counter=counter+1
    if(counter<20)
    setCounter(counter+1)
  }


  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1)
  }


  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue} 
      >Add value</button>
  <br/>
      <button
      
       onClick={removeValue}
      >Decresase value</button>
    </>
  )
}

export default App
