import { useState } from 'react'
import './App.css'
import { DuckComponent } from './components/duck'
import { RadioComponent } from './components/radio'

function App() {
  return (
    <div className="App">
      <DuckComponent/>
      <RadioComponent />
    </div>
  )
}

export default App
