import React from 'react'
import {useState} from 'react'
import Toggle from './Toggle'
function App() {
const [name,setName]= useState("jeeban")
const[count, setCount]=useState(0)
const namechange=()=>{
  setName("jeebanjyoti")
};

  return(
    <div>
      <h1>Learning about state</h1>
      <p>name: {name}</p>
      <button onClick={namechange}>Change Name</button>
      <p>count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>

      <Toggle/>
    </div>
  )
}

export default App
