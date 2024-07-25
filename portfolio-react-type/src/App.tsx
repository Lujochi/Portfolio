import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <div className="app">
      <Header/>
      <Home/>
      <About/>
      <Skill/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
