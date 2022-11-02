import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Landing from '../components/home/Landing'
import Projects from '../components/projects/Projects'
import GitIcon from '../assets/git.svg'
import TwitterIcon from '../assets/twitter.svg'
import InIcon from '../assets/in.svg'
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



        <footer className="w-full max-w-7xl mx-auto h-fit p-6 pt-20 bg-white flex flex-col justify-center items-center gap-4 relative">
          <ul className='list-none w-11/12 flex items-center text-white justify-center gap-10'>
            <li className='p-2 bg-gray-light rounded-full'>
              <a href="https://github.com/vyshak-sukumaran" target="_blank" rel="noopener noreferrer">
                <GitIcon className="w-5 h-5 fill-primary" />
              </a>
            </li>
            <li className='p-2 bg-gray-light rounded-full'>
              <a href="https://www.linkedin.com/in/vyshak-t-69b6671b8" target="_blank" rel="noopener noreferrer">
                <InIcon className="w-5 h-5 fill-primary" />
              </a>
            </li>
            <li className='p-2 bg-gray-light rounded-full'>
              <a href="https://mobile.twitter.com/VyshakS2000" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="w-5 h-5 fill-primary" />
              </a>
            </li>
          </ul>
          <div className='text-black font-inter text-xs font-medium'>Designed and built by Vyshak</div>
        </footer>

      </BlockContainer>
    </div>

  )
}
