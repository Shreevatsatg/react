import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setcounter]=  useState(10)

  const addvalue=()=>{
    setcounter(counter+1)
  }

  const removevalue=()=>{
    setcounter(counter-1)
  }
  return (
    <>
    <h2>hii {counter}</h2>
      <h1>value:{counter}</h1>
      <button onClick={addvalue}>add value</button>
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
