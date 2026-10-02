import React, { useState } from "react";
import axios from "axios";

function PostAPI() {
// step 1 :- define state
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [age, setAge] = useState("");
// handle logic of post using axios
const handleClick=async(e)=>{
    e.preventDefault()
    const data={
        name:name,
        email:email,
        age:age
    }
    const url="http://localhost:3000/users"
    try{
        const response=await axios.post(url,data)
        console.log(response.data)
        alert("user added sucewss fully")

    }
    catch (error){
        console.log(error)
    }
}
// UI handle
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter your Age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default PostAPI;
