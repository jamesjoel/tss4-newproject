import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <div id="page">
          <NavBar />
          <Routes>
            <Route path='' element={<Home />} />
          </Routes>
          <Footer />
      </div>
    </>
  )
}

export default App