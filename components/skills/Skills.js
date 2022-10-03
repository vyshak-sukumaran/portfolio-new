import React, { useRef } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver'
import Hexagon from './Hexagon'

const Skills = () => {
  const ref = useRef(null)
  const intersecting = useIntersectionObserver(ref, {})
  return (
    <div id='skills' className='w-full min-h-[600px] relative'>
      <div className="w-11/12 max-w-md mx-auto pt-10 flex flex-col gap-5 lg:max-w-2xl xl:max-w-3xl">
        <div ref={ref} className='basis-1/3 flex flex-row gap-1 justify-center font-rubik text-2xl font-bold text-primary lg:text-5xl'>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "022ms" }}>W</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "122ms" }}>h</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "222ms" }}>a</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "322ms" }}>t</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "422ms" }}>&nbsp;</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "522ms" }}>I</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "622ms" }}>&nbsp;</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "722ms" }}>D</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "822ms" }}>o</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "922ms" }}>&nbsp;</h1>
            <h1 className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "1022ms" }}>?</h1>
          
        </div>
        <div className='basis-2/3 flex justify-center items-center pl-2 sm:pl-0'>
          {/* <Hexagon /> */}
        </div>
      </div>
    </div>
  )
}

export default Skills