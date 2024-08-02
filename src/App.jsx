import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Profile from './components/profile/Profile'
import Projects from './components/projects/Projects'



function App() {

  return (
    <>
      <NavBar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
