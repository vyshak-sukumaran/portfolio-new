import Image from 'next/image'
import React, { useRef } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver'
import ClassicButton from '../buttons/ClassicButton'

const Projects = () => {
  const ref = useRef(null)
  const intersecting = useIntersectionObserver(ref, {})
  return (
    <div id='projects' className='w-full min-h-[700px] relative pt-32 pb-5'>
      <div className="w-11/12 max-w-sm min-h-[24rem] mx-auto relative sm:max-w-md lg:max-w-2xl xl:max-w-3xl">
        <h1 ref={ref} className="text-2xl font-bold font-rubik text-secondary text-center block py-3 lg:text-3xl xl:text-4xl">
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "022ms" }}>S</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "122ms" }}>o</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "222ms" }}>m</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "322ms" }}>e</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "422ms" }}>&nbsp;</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "522ms" }}>t</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "622ms" }}>h</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "722ms" }}>i</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "822ms" }}>n</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "922ms" }}>g</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1022ms" }}>s</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1122ms" }}>&nbsp;</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1222ms" }}>I</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1322ms" }}>&apos;</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1422ms" }}>v</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1522ms" }}>e</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1622ms" }}>&nbsp;</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1722ms" }}>b</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1822ms" }}>u</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1922ms" }}>i</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "2022ms" }}>l</span>
          <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "2122ms" }}>t</span>
        </h1>
        <div className="w-full box-border flex flex-col gap-3 py-4">

          <div className={`w-auto box-border border-[1px] border-grey shadow-sm rounded-xl overflow-hidden flex flex-col gap-2 p-1 opacity-0 ${intersecting && 'animate-rise-up'} sm:p-2 lg:flex-row lg:gap-3`} style={{animationDelay: "22ms"}}>
            <div className='w-full h-32 rounded-xl relative overflow-hidden lg:w-72 lg:h-auto xl:w-80 xl:h-48'>
              <Image src="/nicolas.jpg" alt="proj" layout='fill' />
            </div>
            <div className='basis-3/5 flex flex-col'>
              <h1 className='font-sora text-xl font-bold text-secondary'>Kaarmy</h1>
              <p className='grow font-sora text-sm text-justify pt-2 text-black'>A social networking site for Companies, Professionals, Students, Freelancers and Entrepreneurs</p>
              <p className='grow font-sora text-sm text-justify pt-1 text-black'>
                <span className='font-bold'>Tech and tools : </span>React js, Material ui, Styled components, Swr, Django, Django rest framework, Postgres, Redis, Aws</p>
              <div className='shrink pt-2'>
                <ClassicButton small>Visit</ClassicButton>
              </div>
            </div>
          </div>

          <div className={`w-auto box-border border-[1px] border-grey shadow-sm rounded-xl overflow-hidden flex flex-col gap-2 p-1 opacity-0 ${intersecting && 'animate-rise-up'} sm:p-2 lg:flex-row lg:gap-3`} style={{animationDelay: "22ms"}}>
            <div className='w-full h-32 rounded-xl relative overflow-hidden lg:w-72 lg:h-auto xl:w-80 xl:h-48'>
              <Image src="/nicolas.jpg" alt="proj" layout='fill' />
            </div>
            <div className='basis-3/5 flex flex-col'>
              <h1 className='font-sora text-xl font-bold text-secondary'>Kaarmy</h1>
              <p className='grow font-sora text-sm text-justify pt-2 text-black'>A social networking site for Companies, Professionals, Students, Freelancers and Entrepreneurs</p>
              <p className='grow font-sora text-sm text-justify pt-1 text-black'>
                <span className='font-bold'>Tech and tools : </span>React js, Material ui, Styled components, Swr, Django, Django rest framework, Postgres, Redis, Aws</p>
              <div className='shrink pt-2'>
                <ClassicButton small>Visit</ClassicButton>
              </div>
            </div>
          </div>      

        </div>
      </div>
    </div>
  )
}

export default Projects