import Image from 'next/image'
import React from 'react'
import ClassicButton from '../buttons/ClassicButton'

const Projects = () => {
  return (
    <div className='w-full min-h-[600px] relative bg-white pt-32 pb-5'>
      <div className="w-full h-52 absolute top-0 left-0 bg-primary"></div>
      <div className="w-1/2 min-h-[24rem] mx-auto relative bg-white border-[1px] rounded-xl border-primary">
        <h1 className="text-4xl font-bold font-rubik text-secondary text-center block mt-4">
          Some things I've built
          </h1>
        <div className="w-full box-border grid grid-cols-2 gap-4 p-4">

          <div className='h-96 w-auto box-border flex flex-col'>
            <div className='grow bg-white shadow-md rounded-xl relative overflow-hidden'>
              <Image src="/nicolas.jpg" alt="proj" layout='fill' />
            </div>
            <div className='basis-auto bg-white p-2 '>description sdfasdfasdfasd sdafasdf asdfsa a a sddf aaf a da sdf asdfsd asfsa dfsdaf sadfasdg asdf</div>
            <div className='shrink bg-white'>
              <ClassicButton small>Visit</ClassicButton>
            </div>
          </div>
          <div className='h-96 w-auto box-border flex flex-col'>
            <div className='grow bg-white shadow-md rounded-xl relative overflow-hidden'>
              <Image src="/nicolas.jpg" alt="proj" layout='fill' />
            </div>
            <div className='basis-auto bg-white p-2 '>description sdfasdfasdfasd sdafasdf asdfsa a a sddf aaf a da sdf asdfsd asfsa dfsdaf sadfasdg asdf</div>
            <div className='shrink bg-white'>
              <ClassicButton small>Visit</ClassicButton>
            </div>
          </div>
          <div className='h-96 w-auto box-border flex flex-col'>
            <div className='grow bg-white shadow-md rounded-xl relative overflow-hidden'>
              <Image src="/nicolas.jpg" alt="proj" layout='fill' />
            </div>
            <div className='basis-auto bg-white p-2 '>description sdfasdfasdfasd sdafasdf asdfsa a a sddf aaf a da sdf asdfsd asfsa dfsdaf sadfasdg asdf</div>
            <div className='shrink bg-white'>
              <ClassicButton small>Visit</ClassicButton>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects