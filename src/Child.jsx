import React from 'react'
// default props
const Child = ({ name="XYZ" }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {name}</p>
    </div>
  )
}

export default Child