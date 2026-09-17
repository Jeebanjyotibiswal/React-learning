import React from 'react'

function App() {
  const name="jeeban"
  let a=10;
  let b=20;
  const obj={
    name:"jeeban",
    age:22,
    address:"kathmandu"
  }
  const fruits=["apple","banana","mango"]
  const isLogedIn=true;
  function add(a,b){
    return a+b;
  }
  function showAlert(){
    alert("Hello World");
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>This is a simple React app.</p>
      <p>Sum: {a + b}</p>
      <p>Name: {obj.name}</p>
      <p>Age: {obj.age}</p>
      <p>Address: {obj.address}</p>
      <p>Fruits: {fruits[0]}</p>
      <p>{isLogedIn ? "Logged In" : "Not Logged In"}</p> // conditional rendering
      <button onClick={()=>alert(add(a,b))}>Add</button> 
    
       <button onClick={showAlert}>Click Me !!</button>
    </div>
  )
}

export default App
