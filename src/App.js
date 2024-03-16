import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [advice, setadvice] = useState("Please Click the Button get advice");
  const [count, setcount] = useState(0);

  async function advicefree() {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setadvice(data.slip.advice)
    setcount((c)=>c+1)

  }
  return (
    <div className='app-container'>
      <h1>Free Advice</h1>
      <h3>{advice}</h3>
      <button onClick={advicefree}>Get Advice</button>
      <p>
        Advice Count : <span>{count}</span>
      </p>

      <p className='footer'>Designed By <a href="https://personal-portfolio-roan-three.vercel.app/">Shakthi</a></p>

    </div>
  )
}

export default App