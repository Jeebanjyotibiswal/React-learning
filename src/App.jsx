import React from "react"
import { useState } from "react"
import Hobbies from "./Hobbies"
import Child from "./Child"
import User from "./User"
import Event from "./Event"
const App=()=>{
  const [hobbi,setHobbi]=useState("cricket")
  let hobby="cricket"
  const obj1={
    "name":"jeeban",
    "age":21
  }
  const name="jeeban"
  let array=[1,2,3,4,5]
  return(
    <div>
      <h1>Welcome to My React APP</h1>
      <Hobbies hobby={hobby} obj={obj1} num={array.join(", ")} />
    
      <Child/> {/* //default props */}
       {/* //Jsx props */}
     <User> 
      <div> 
        <h1>My name is JSX </h1>  
      </div>
     </User>
     <Event />
     
    </div>
    // Onclick Event Props
  )
}
export default App
