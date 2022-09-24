import React from 'react'
import AnimatedTitles from './AnimatedTitles'
import CarIcon from '../../assets/car.svg'
import GlassIcon from '../../assets/glass.svg'
import BallIcon from '../../assets/football.svg'

const Landing = () => {

  return (
    <div id="home" className='w-full h-screen min-h-[600px] max-h-[800px] relative'>

      <div className='w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
        <AnimatedTitles />
        {/* text-5xl is the max size */}
        <h2 className="font-rubik text-3xl text-center font-semibold text-secondary overflow-hidden flex items-center justify-center sm:text-4xl xl:text-5xl">
          <span className='translate-y-[200px] rotate-[15deg] origin-top-right animate-slide-up' style={{ animationDelay: '2122ms' }}>Web&nbsp;</span>
          <span className='translate-y-[200px] rotate-[15deg] origin-top-right animate-slide-up' style={{ animationDelay: '2144ms' }}>Developer</span>
        </h2>
      </div>

      <div className="absolute w-fit h-fit bottom-0 right-0 grid grid-rows-2 grid-cols-2 opacity-20">
        <div className='box-border p-2'>
          <CarIcon className="w-8 h-8 -rotate-45" />
        </div>
        <div className='box-border p-2'>
          <GlassIcon className="w-8 h-8 rotate-45" />
        </div>
        <div className='col-span-2 flex justify-center'>
          <BallIcon className="w-8 h-8 animate-spin-slow" />
        </div>
      </div>

    </div>
  )
}

export default Landing