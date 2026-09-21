import React, { useTransition } from 'react'

function App() {
  const [pending, startTransition] = useTransition()
  const handleClick=()=>{
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
    })
  }
  return (
    <div>
      <h2>Use Transition Example</h2>
      <button disabled={pending} onClick={handleClick}>Click me !!</button>

    </div>
  )
}

export default App