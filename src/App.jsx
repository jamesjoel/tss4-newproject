import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Destination from './pages/Destination/Destination'
const App = () => {
  return (
    <>
      <div id="page">
          <NavBar />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='destination/:a' element={<Destination />} />
            <Route path='about/:a' element={<About />} />
          </Routes>
          <Footer />
      </div>
    </>
  )
}

export default App