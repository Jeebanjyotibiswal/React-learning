// child component
import React from 'react'

function Hobbies({hobby,obj,num}) {
  return (
    <div>
        <h3>my hobbies is : {hobby}</h3>
        <h3>my name is : {obj.name}</h3>
        <h3>my age is : {obj.age}</h3>
        <h3>my favorite numbers are : {num}</h3>
    </div>
  )
}

export default Hobbies