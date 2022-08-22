import Image from 'next/image'
import React from 'react'
import ClassicButton from '../buttons/ClassicButton'

const Projects = () => {
  return (
    <div id='projects' className='w-full min-h-[700px] relative pt-32 pb-5'>
      <div className="w-2/3 min-h-[24rem] mx-auto relative">
        <h1 className="text-4xl font-bold font-rubik text-secondary text-center block">
          Some things I've built
        </h1>
        <div className="w-full box-border flex flex-col gap-4 p-4">

          <div className='h-72 w-auto box-border border-[1px] border-moon shadow-sm rounded-xl overflow-hidden flex gap-4 p-4'>
            <div className='basis-3/5 w-full h-full rounded-xl relative overflow-hidden'>
              <Image src="/nicolas.jpg" alt="proj" layout='fill' />
            </div>
            <div className='pt-2 basis-3/5 flex flex-col'>
              <h1 className='font-sora text-lg font-bold'>Kaarmy : </h1>
              <p className='grow font-sora text-md text-justify'>A social networking site for Companies, Professionals, Students, Freelancers and Entrepreneurs</p>
              <p className='grow font-sora text-md text-justify'>Tech used : React js, Material ui, Styled components, Swr, Django, Django rest framework, Postgres, Redis, Aws</p>
              <div className='shrink pt-2'>
                <ClassicButton small>Visit</ClassicButton>
              </div>
            </div>
          </div>
          <div className='h-72 w-auto box-border border-[1px] border-moon shadow-sm rounded-xl overflow-hidden flex gap-4 p-4'>
            <div className='basis-3/5 w-full h-full rounded-xl relative overflow-hidden'>
              <Image src="/nicolas.jpg" alt="proj" layout='fill' />
            </div>
            <div className='pt-2 basis-3/5 flex flex-col'>
              <h1 className='font-sora text-lg font-bold'>Kaarmy : </h1>
              <p className='grow font-sora text-md text-justify'>A social networking site for Companies, Professionals, Students, Freelancers and Entrepreneurs</p>
              <p className='grow font-sora text-md text-justify'>Tech used : React js, Material ui, Styled components, Swr, Django, Django rest framework, Postgres, Redis, Aws</p>
              <div className='shrink pt-2'>
                <ClassicButton small>Visit</ClassicButton>
              </div>
            </div>
          </div>
          <div className='h-72 w-auto box-border border-[1px] border-moon shadow-sm rounded-xl overflow-hidden flex gap-4 p-4'>
            <div className='basis-3/5 w-full h-full rounded-xl relative overflow-hidden'>
              <Image src="/nicolas.jpg" alt="proj" layout='fill' />
            </div>
            <div className='pt-2 basis-3/5 flex flex-col'>
              <h1 className='font-sora text-lg font-bold'>Kaarmy : </h1>
              <p className='grow font-sora text-md text-justify'>A social networking site for Companies, Professionals, Students, Freelancers and Entrepreneurs</p>
              <p className='grow font-sora text-md text-justify'>Tech used : React js, Material ui, Styled components, Swr, Django, Django rest framework, Postgres, Redis, Aws</p>
              <div className='shrink pt-2'>
                <ClassicButton small>Visit</ClassicButton>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects