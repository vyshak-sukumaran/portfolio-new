import React, { useRef } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver'
import Hexagon from './Hexagon'

const Skills = () => {
  const ref = useRef(null)
  const intersecting = useIntersectionObserver(ref, {})
  return (
    <div id='skills' className='w-full h-screen min-h-[760px] relative'>
      <div className="absolute w-9/12 h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row">
        <div className='basis-1/3 flex flex-col justify-center'>

          <h1 className='font-rubik text-8xl font-bold text-secondary'>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "022ms" }}>W</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "122ms" }}>h</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "222ms" }}>a</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "322ms" }}>t</span>
          </h1>
          <h1 className='font-rubik text-8xl font-bold text-secondary'>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "422ms" }}>C</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "522ms" }}>a</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "622ms" }}>n</span>
          </h1>
          <h1 ref={ref} className='font-rubik text-8xl font-bold text-primary'>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "722ms" }}>I</span>
          </h1>
          <h1 className='font-rubik text-8xl font-bold text-secondary'>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "822ms" }}>D</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "922ms" }}>o</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1022ms" }}>&nbsp;</span>
            <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1122ms" }}>?</span>
          </h1>
        </div>
        <div className='basis-2/3 flex justify-center items-center'>
          <Hexagon />
        </div>
      </div>
    </div>
  )
}

export default Skills