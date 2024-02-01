import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#171217] ">
      <div className='container mx-auto px-12 py-4' >
        <NavBar/>
        <Hero />
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
      
    </main>
  )
}
