import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Getapi() {
    // step 1 set the state
    const [data,setData]=useState([])
    //step2: dfine the function which will extract the reponse using axios
    const getData=async()=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        try{
            const response=await axios.get(url)
            // step 3 setthe state with the response
            setData(response.data)
        }
        catch(error){
            console.log(error)
        }
    }
    // step4 use the useEffect
    useEffect(()=>{
        getData()
    },[])
    // step 5 handle the UI
  return (
      <div>
            <h1>Get User Data</h1>
            {data.map((i) => (
                <div key={i.id}>
                    <p>Name: {i.name}</p>
                    <p>Email: {i.email}</p>
                </div>
            ))}
        </div>
  )
}

export default Getapi