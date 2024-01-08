import { useState } from 'react'
import Header from './components/header'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import MyExpertise from './components/MyExpertise'
import Footer from './components/Footer'
import './App.css'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Banner/>
    <About/>
    <Projects/>
    <MyExpertise/>
    <Footer/>
    </>
  )
}

export default App
