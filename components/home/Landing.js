import React from 'react'
import AnimatedTitles from './AnimatedTitles'
import CarIcon from '../../assets/car.svg'
import GlassIcon from '../../assets/glass.svg'
import BallIcon from '../../assets/football.svg'

const Landing = () => {

  return (
    <div className='w-full h-screen min-h-[600px] relative'>

      <div className='w-fit h-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2'>
        <AnimatedTitles />
      </div>
      {/* box-shadow: 2px -4px 4px 0px rgba(21, 27, 114, 1) inset; */}

      <div className="absolute w-fit h-fit bottom-0 right-0 grid grid-rows-2 grid-cols-2 opacity-50">
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