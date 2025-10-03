
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './landingpage/Home'
import Game from './Game/Game'

function App() {
  

  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/game' element={<Game />} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
