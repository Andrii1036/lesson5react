import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { MainContent } from './Components/Content/MainContent/MainContent'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className='Main'>
        <Header />
        <MainContent />
        <Footer />

      </div>
    </BrowserRouter>
  )
}
export default App;