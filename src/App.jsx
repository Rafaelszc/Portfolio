import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'

function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/*" element={ <NotFound/> }/>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
