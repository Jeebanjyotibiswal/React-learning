import React from 'react'
import Getapi from './pages/Getapi'
import PostAPI from './pages/PostAPI'

function App() {
  return (
    <div>
      <h1>Home</h1>
      <Getapi />
      <h2>POst API</h2>
      <PostAPI />
    </div>
  )
}

export default App