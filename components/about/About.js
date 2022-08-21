import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen min-h-[700px] relative'>
        <div className="w-full h-1/2"></div>
        <div className="w-full h-1/2 bg-primary"></div>

        <div className="absolute w-1/2 h-96 border-[1px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-xl bg-white border-primary flex flex-row">
            <div className="basis-2/5 p-2 flex justify-center items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-[3px] shadow-blue border-secondary relative">
                    <Image src="/vyshak1.png" alt='me' layout='fill' />
                </div>
            </div>
            <div className="basis-3/5 p-2 flex flex-col justify-center gap-8">
                <h1 className='font-rubik font-bold text-3xl text-secondary'>Who am I ?</h1>
                <p className='font-medium'>
                    &emsp;&emsp;&emsp;&emsp;&emsp;Building things on web were always interesting for me thats why I chose to become a web developer after college.
                    Lately, I figured out that my designing skills are not that bad, so you can say that, I am one of those guys who can do both coding and designing.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About