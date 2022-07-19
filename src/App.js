import React, { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import CreateACharacter from './components/CreateACharacter'

function App() {

const [screen, setScreen] = useState('main')
  return (
    <div className="screen">
      {
        (screen === 'main') ? <MainMenu setScreen={setScreen} /> : <CreateACharacter />
      }
    </div>
  )
}

export default App