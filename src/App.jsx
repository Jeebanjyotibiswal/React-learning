import React from 'react';
import {useState} from 'react';
function App(){
  const [gender,setGender] = useState('male');
  const [country,setCountry]=useState("india")
  return(
    <div>
      <h1> Example of radio button and Drop Down</h1>
      <h2>Radio Button of gender</h2>
      <h3>select gender</h3>
      <label >
        <input type="radio"
        name='gender' value="male" checked={gender==="male"}
        onChange={(e)=>setGender(e.target.value)}
        />
        Male
      </label>
         <label >
        <input type="radio"
        name='gender' value="female" checked={gender==="female"}
        onChange={(e)=>setGender(e.target.value)}
        />
        female
      </label>
         <label >
        <input type="radio"
        name='gender' value="other" checked={gender==="other"}
        onChange={(e)=>setGender(e.target.value)}
        />
       
        Other
      </label>
       <p>Gender :{gender}</p>

       <h1>Drop Down for countries</h1>
       <select value={country} onChange={(e)=>setCountry(e.target.value)}>
        <option value="india">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="UK">UK</option>
        <option value="USA">USA</option>
        <option value="Brazil">Brazil</option>
        
       </select>
       <p>Selected Country :{country}</p>
    </div>
  )
}
export default App;