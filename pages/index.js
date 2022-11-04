import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Landing from '../components/home/Landing'
import Projects from '../components/projects/Projects'
import Curtain from '../components/loading/Curtain'
import BlockContainer from '../components/BlockContainer'
import Navbar from '../components/nav/Navbar'
import Skills from '../components/skills/Skills'

export default function Home() {

  return (
    <div id="main" className="bg-white w-full h-screen overflow-y-scroll overflow-x-hidden scroll-smooth">

      <BlockContainer>

        <Curtain />

        <Navbar />

        <Landing />

        <About />

        <Skills />

        <Projects />

        <Contact />



        <footer className="w-full relative text-center p-5">
          <div className='text-black font-inter text-xs font-medium'>Designed and built by Vyshak</div>
        </footer>

      </BlockContainer>
    </div>

  )
}
