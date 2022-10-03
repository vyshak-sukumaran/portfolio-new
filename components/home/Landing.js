import React from 'react'
import CarIcon from '../../assets/car.svg'
import GlassIcon from '../../assets/glass.svg'
import BallIcon from '../../assets/football.svg'

const Landing = () => {

  return (
    <div id="home" className='w-full h-screen min-h-[600px] max-h-[800px] relative'>

      <div className="w-1/2 h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className='w-fit h-full mx-auto font-inter text-primary font-extrabold text-7xl tracking-wider leading-snug'>
          <h1>I<span className='text-secondary'>&apos;</span>M</h1>
          <h1>VYSHAK</h1>
          <h1>SUKUMARAN<span className='text-secondary'>.</span></h1>
          <h2 className='font-rubik font-semibold text-3xl text-secondary'>WEB DEVELOPER</h2>
        </div>
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