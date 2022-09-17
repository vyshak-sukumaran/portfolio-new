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
import ArrowIcon from '../assets/arrow.svg'
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



        <footer className="w-full h-64 p-4 bg-secondary flex flex-col justify-center items-center gap-6 relative">
          <div className='text-primary font-rubik text-xl font-medium'>Let&apos;s stay in touch</div>
          <ul className='list-none w-11/12 flex items-center text-white justify-center gap-10'>
            <li className='p-2 bg-primary rounded-full'>
              <a href="https://github.com/vyshak-sukumaran" target="_blank" rel="noopener noreferrer">
                <GitIcon className="w-5 h-5" />
              </a>
            </li>
            <li className='p-2 bg-primary rounded-full'>
              <a href="https://www.linkedin.com/in/vyshak-t-69b6671b8" target="_blank" rel="noopener noreferrer">
                <InIcon className="w-5 h-5" />
              </a>
            </li>
            <li className='p-2 bg-primary rounded-full'>
              <a href="https://mobile.twitter.com/VyshakS2000" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </li>
          </ul>
          <div className="absolute top-1/2 -left-10 -translate-y-1/2 text-primary text-sm -rotate-90 p-2 font-rubik animate-pulse lg:-left-6">
            <a href="#home" className='flex gap-3'>
              <span>Back to top</span>
              <ArrowIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-primary text-sm -rotate-90 p-2 font-rubik animate-pulse lg:-right-6">
            <a href="#home" className='flex gap-3'>
              <span>Back to top</span>
              <ArrowIcon className="w-5 h-5" />
            </a>
          </div>
        </footer>

      </BlockContainer>
    </div>

  )
}
