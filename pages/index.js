import React, { useEffect, useState } from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Landing from '../components/home/Landing'
import SideNav from '../components/nav/SideNav'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import GitIcon from '../assets/git.svg'
import TwitterIcon from '../assets/twitter.svg'
import InIcon from '../assets/in.svg'
import ArrowIcon from '../assets/arrow.svg'
import Curtain from '../components/loading/Curtain'
import BlockContainer from '../components/BlockContainer'
import Navbar from '../components/nav/Navbar'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const loadingTime = 2000

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, loadingTime + 100);

  }, [])

  return (
    <div id="main" className="bg-moon w-full h-screen overflow-y-scroll overflow-x-hidden scroll-smooth">

      <BlockContainer>

        {
          loading && <Curtain />
        }

        <SideNav />
        {/* <Navbar /> */}

        <Landing />

        <About />

        <Skills />

        <Projects />

        <Contact />



        <footer className="w-full h-fit p-6 pt-20 bg-white flex flex-col justify-center items-center gap-4 relative">
          <ul className='list-none w-11/12 flex items-center text-white justify-center gap-10'>
            <li className='p-2 bg-moon rounded-full'>
              <a href="https://github.com/vyshak-sukumaran" target="_blank" rel="noopener noreferrer">
                <GitIcon className="w-5 h-5 fill-secondary" />
              </a>
            </li>
            <li className='p-2 bg-moon rounded-full'>
              <a href="https://www.linkedin.com/in/vyshak-t-69b6671b8" target="_blank" rel="noopener noreferrer">
                <InIcon className="w-5 h-5 fill-secondary" />
              </a>
            </li>
            <li className='p-2 bg-moon rounded-full'>
              <a href="https://mobile.twitter.com/VyshakS2000" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="w-5 h-5 fill-secondary" />
              </a>
            </li>
          </ul>
          <div className='text-black font-sora text-xs font-medium'>Designed and built by Vyshak</div>
          <div className="absolute top-1/2 -left-10 -translate-y-1/2 text-secondary text-sm -rotate-90 p-2 font-rubik animate-pulse lg:-left-6">
            <a href="#home" className='flex gap-3'>
              <span>Back top</span>
              <ArrowIcon className="w-5 h-5 fill-secondary" />
            </a>
          </div>
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-secondary text-sm -rotate-90 p-2 font-rubik animate-pulse lg:-right-6">
            <a href="#home" className='flex gap-3'>
              <span>Back top</span>
              <ArrowIcon className="w-5 h-5 fill-secondary" />
            </a>
          </div>
        </footer>

      </BlockContainer>
    </div>

  )
}
