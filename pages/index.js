import React, { useEffect, useState } from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Landing from '../components/home/Landing'
import Navbar from '../components/nav/Navbar'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import GitIcon from '../assets/git.svg'
import TwitterIcon from '../assets/twitter.svg'
import InIcon from '../assets/in.svg'
import Curtain from '../components/loading/Curtain'
import BlockContainer from '../components/BlockContainer'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const loadingTime = 2000

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, loadingTime + 100);

  }, [])

  return (
    <div className="bg-moon w-full h-auto">

      <BlockContainer>

        {
          loading && <Curtain />
        }

        <Navbar />

        <Landing />

        <About />

        <Skills />

        <Projects />

        <Contact />

      

      <footer className="w-full h-16 bg-secondary flex justify-center">
        <ul className='list-none w-11/12 flex items-center text-white justify-center gap-12'>
          <li>
            <GitIcon className="w-5 h-5" />
          </li>
          <li>
            <TwitterIcon className="w-5 h-5" />
          </li>
          <li>
            <InIcon className="w-5 h-5" />
          </li>
        </ul>
      </footer>
      
      </BlockContainer>
    </div>

  )
}
