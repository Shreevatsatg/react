import { useState } from 'react'
import './App.css'

function App() {
  
const [counter, setcounter] = useState(0)

  //let counter =5

  const addvalue = ()=>{
    //console.log("clicked",counter)
    //counter = counter + 1
    if (counter < 10){
    setcounter (counter + 1)
 }
}

 const removevalue = ()=>{
  if (counter > 0){
  setcounter(counter-1)
}

 }
  return (
    <>
      <h1>hii by shreevatsa</h1>   
      <h2>counter value: {counter}</h2>

      <button
      onClick={addvalue}>add value</button>
      <br />
      <button
      onClick={removevalue}
      >remove value</button>
    </>
  )
}

export default App
