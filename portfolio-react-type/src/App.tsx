import Header from './components/Header'
import Home from './routes/Home'
import About from './routes/About'
import Skill from './routes/Skill'
import Services from './routes/Services'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
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
