import React, { useRef } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const ref = useRef(null)
  const intersecting = useIntersectionObserver(ref, {})
  return (
    <div id='projects' className='w-full min-h-[700px] relative p-4 pb-5 bg-gray-light'>
      <div className='w-full max-w-lg h-full mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl'>
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
        <br />
        <br />
        <section>
          <div className={`w-fit h-fit box-border opacity-0 ${intersecting && 'animate-rise-up'}`} style={{ animationDelay: "500ms" }}>
            <ProjectCard
              image='https://ucarecdn.com/cd6afc5f-21f0-4f54-96be-6c0a4aa57083/kkkarmy.png'
              title='Kaarmy'
              body='A social networking site for Companies, Professionals, Students, Freelancers and Entrepreneurs.'
              stack='React js, Material ui, Styled components, Swr, Django, Django rest framework, Postgres, Redis, Aws'
              link='https://www.kaarmy.com'
            />
          </div>
          <br />
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