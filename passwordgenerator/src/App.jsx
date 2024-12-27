import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8)
  const [numberAllowed,setnumbweAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setpassword]=useState('')

  const passwordref =useRef(null)

  const generatepassword = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*()_+"

    for(let i=1;i<length;i++){
      const char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
setpassword(pass)
  },[length,numberAllowed,charAllowed]
) 

const copyPasswordtoclipboard=()=>{
  window.navigator.clipboard.writeText(password)
  passwordref.current.select()
}

useEffect(()=>{
generatepassword()
},[length,numberAllowed,charAllowed])

  return (
 <div 
  className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
  <h1 className='text-white text-center my-3'>
    password generator
  </h1>

  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input className='outline-none w-full py-1 px-3'
     type="text"
     value={password}
     placeholder='password'
     readOnly
     ref={passwordref}
     />
      <button
      onClick={copyPasswordtoclipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
  </div>

  <div
  className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
<input
type='range'
min={6}
max={100}
value={length}
className='cursor-pointer'
onChange={(e)=> setlength(e.target.value)}
name=''
id=''
/>
<label htmlFor="length">Length : {length}</label>
    </div> 

    <div
  className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
<input type="checkbox" 
defaultChecked={numberAllowed}
onChange={()=>{
  setnumbweAllowed((prev)=> !prev)
}
}
name=''
id=''
/>
<label htmlFor='number'>numbers</label>
    </div> 
  </div>

  <div
  className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
<input type="checkbox" 
defaultChecked={charAllowed}
onChange={()=>{
  setcharAllowed((prev)=> !prev)
}
}
name=''
id=''
/>
<label htmlFor='charinput'>character</label>
    </div> 
  </div>

</div>
</div>
  )
}

export default App