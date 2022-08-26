import React, { useRef } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver'
import Hexagon from './Hexagon'

const Skills = () => {
  const ref = useRef(null)
  const intersecting = useIntersectionObserver(ref, {})
  return (
    <div id='skills' className='w-full min-h-[500px] relative'>
      <div className="w-11/12 max-w-md mx-auto pt-10 flex flex-col gap-5 lg:max-w-2xl lg:flex-row xl:max-w-4xl">
        <div className='basis-1/3 flex flex-row gap-1 justify-center font-rubik text-2xl font-bold text-secondary lg:flex-col lg:text-7xl xl:text-8xl'>

          <h1>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "022ms" }}>W</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "122ms" }}>h</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "222ms" }}>a</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "322ms" }}>t</span>
          </h1>
          <h1>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "422ms" }}>C</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "522ms" }}>a</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "622ms" }}>n</span>
          </h1>
          <h1 ref={ref} className='text-primary'>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "722ms" }}>I</span>
          </h1>
          <h1>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "822ms" }}>D</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "922ms" }}>o</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1022ms" }}>&nbsp;</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1122ms" }}>?</span>
          </h1>
        </div>
        <div className='basis-2/3 flex justify-center items-center pl-2 sm:pl-0'>
          <Hexagon />
        </div>
      </div>
    </div>
  )
}

export default Skills