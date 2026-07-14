import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTeam from './comonents/AddTeam'
import ViewTeams from './comonents/ViewTeams'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AddTeam/>
        <ViewTeams/>
    </>
  )
}

export default App
