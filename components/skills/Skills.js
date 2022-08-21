import React from 'react'
import Hexagon from './Hexagon'

const Skills = () => {
  return (
    <div className='w-full h-screen min-h-[760px] relative bg-primary'>
        <div className="absolute w-9/12 h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row">
            <div className='basis-1/3 flex flex-col justify-center'>
                <h1 className='font-rubik text-8xl font-bold text-secondary'>What</h1>
                <h1 className='font-rubik text-8xl font-bold text-secondary'>Can</h1>
                <h1 className='font-rubik text-8xl font-bold text-white'>I</h1>
                <h1 className='font-rubik text-8xl font-bold text-secondary'>Do ?</h1>
            </div>
            <div className='basis-2/3 flex justify-center items-center'>
                <Hexagon />
            </div>
        </div>
    </div>
  )
}

export default Skills