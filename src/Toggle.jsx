import React from 'react'
import {useState} from 'react'
import Bio from './Bio'

function Toggle() {
    const [show,setShow]=useState(false)

  return (
    <div>
        <button onClick={()=>setShow(!show)}>{show ? 'Hide' : 'Show'} details</button>
        {show && <Bio />}
    </div>
  )
}

export default Toggle