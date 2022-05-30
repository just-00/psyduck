import { useState } from 'react'
import './App.css'
import { DuckComponent } from './components/duck'
import { FloorComponent } from './components/floor'
import { RadioComponent } from './components/radio'

function App() {
  return (
    <section className="App" style={{display: 'flex'}}>
      {/* <DuckComponent/> */}
      <FloorComponent />
    </section>
  )
}

export default App
