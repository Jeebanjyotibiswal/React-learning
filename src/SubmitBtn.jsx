import React from 'react'
import { useFormStatus } from 'react-dom'

function SubmitBtn() {
    const {pending}=useFormStatus();
  return (
    <div>
        <input tytpe="text" placeholder='enter your name' value="name"/>
        <input tytpe="text" placeholder='enter your email' value="email"/>
        <input tytpe="password" placeholder='enter your name' value="password"/>
        <button disabled={pending}>{pending?"submiting...":"submit"}</button>
    </div>
  )
}

export default SubmitBtn