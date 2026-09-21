import React from 'react'
import SubmitBtn from './SubmitBtn'

function App() {
  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("form Submited")
  }
  return (
    <div><form action={handleSubmit}>
      <SubmitBtn/>
    </form>
      
    </div>
  )
}

export default App