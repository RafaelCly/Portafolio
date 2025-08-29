import { useState } from 'react'
import Header from './components/Header/Header'
import Start from './components/Main/Start/Start'
import AboutMe from './components/Main/AboutMe/AboutMe'
import Projects from './components/Main/Projects/Projects'
import Skills from './components/Main/Skills/Skill'
import Contact from './components/Main/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
    <Header></Header>
    <Start></Start>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
