import React, { useRef } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const ref = useRef(null)
  const intersecting = useIntersectionObserver(ref, {})
  return (
    <div id='projects' className='w-full min-h-[700px] relative p-4 pb-5 bg-gray-light'>
      <div className="h-12 w-full"></div>
      <div className='w-full h-full mx-auto max-w-lg sm:max-w-4xl'>
        <header>
          <h1 ref={ref} className="text-xl uppercase font-bold font-rubik text-primary text-center block py-3 md:text-2xl lg:text-3xl xl:text-4xl">
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
        </header>
        <section className='flex gap-3 flex-wrap mt-10'>
          <div className={`w-fit h-fit box-border opacity-0 ${intersecting && 'animate-rise-up'}`} style={{ animationDelay: "500ms" }}>
            <ProjectCard
              image='https://ucarecdn.com/225cf3f4-e9c2-4fcd-bd4a-e1236d47236b/logo.svg'
              title='Bashboard'
              body='A collaborative canvas for users to make their creativity thrive with lot of drawing options.'
              stack='React js, Node.js, Socket.io, Tailwind CSS, ShadCn'
              link='https://bashboard-ten.vercel.app/'
              isSvg
            />
          </div>

          <div className={`w-fit h-fit box-border opacity-0 ${intersecting && 'animate-rise-up'}`} style={{ animationDelay: "1000ms" }}>
            <ProjectCard
              image='https://ucarecdn.com/3c33ab8e-4369-4662-a3a8-53b8dd7fc85b/os20.png'
              title='Os 20'
              body='A static Operating System UI prototype inspired from some of the linux distros I&apos;ve used.'
              stack='React js, Styled components, Figma, Netlify'
              link='https://os20.netlify.app/'
            />
          </div>
        </section>
      </div>

      <div className="h-24 w-full"></div>
    </div>
  )
}

export default Projects