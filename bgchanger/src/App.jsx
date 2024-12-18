import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor] = useState('olive')
// function changecolor(color){
//   setcolor(color)
// }
  return (
   <div className='w-full h-screen duration-200  bg-black'style= {{backgroundColor:color}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3'>
<button 
onClick={()=>setcolor('red')}
className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
style={{backgroundColor:'red'}}>
  
  red
  </button>
  <button 
onClick={()=>setcolor('green')}
className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
style={{backgroundColor:'green'}}>
  green
  </button>
  <button 
onClick={()=>setcolor('blue')}
className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
style={{backgroundColor:'blue'}}>
  blue
  </button>
  </div>
  </div>
  )
}

export default App
