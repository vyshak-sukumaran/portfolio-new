import React from 'react'
import CarIcon from '../../assets/car.svg'
import GlassIcon from '../../assets/glass.svg'
import BallIcon from '../../assets/football.svg'

const Landing = () => {

  return (
    <div id="home" className='w-full h-screen min-h-[600px] max-h-[800px] relative'>

      <div className="w-full max-w-[1366px] h-full mx-auto relative">
        <div className='w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-inter text-primary font-extrabold text-4xl tracking-wider leading-tight overflow-hidden sm:text-5xl md:text-6xl xl:text-7xl'>
          <h1 className='tracking-[20px] animate-spacing'>I<span className='text-secondary'>&apos;</span>M</h1>
          <h1 className='tracking-[20px] animate-spacing'>VYSHAK</h1>
          <h1 className='tracking-[20px] animate-spacing'>SUKUMARAN<span className='text-secondary'>.</span></h1>
          <h2 className="mt-4 font-rubik text-xl text-center font-semibold text-secondary overflow-hidden flex items-center sm:text-2xl xl:text-3xl">
            <span className='translate-y-[200px] rotate-[15deg] origin-top-right animate-slide-up' style={{ animationDelay: '2622ms' }}>WEB&nbsp;</span>
            <span className='translate-y-[200px] rotate-[15deg] origin-top-right animate-slide-up' style={{ animationDelay: '2744ms' }}>DEVELOPER</span>
          </h2>
        </div>

        <div className="absolute w-fit h-fit bottom-0 right-0 grid grid-rows-2 grid-cols-2 opacity-20">
          <div className='box-border p-2'>
            <CarIcon className="w-6 h-6 -rotate-45" />
          </div>
          <div className='box-border p-2'>
            <GlassIcon className="w-6 h-6 rotate-45" />
          </div>
          <div className='col-span-2 flex justify-center'>
            <BallIcon className="w-6 h-6 animate-spin-slow" />
          </div>
        </div>
      </div>
      <div className="h-28 w-full"></div>
    </div>
  )
}

export default Landing