import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full h-screen min-h-[700px] relative'>
        <div className="absolute w-2/3 min-h-[26rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-xl bg-white border-[1px] border-moon shadow-sm flex flex-row">
            <div className="basis-2/5 p-2 flex justify-center items-center">
                <div className="w-44 h-44 rounded-full overflow-hidden border-[3px] shadow-blue border-secondary relative">
                    <Image src="https://ucarecdn.com/d95ea986-cc01-42d7-8dc3-9fea52558cdf/vyshak1.png" alt='me' layout='fill' />
                </div>
            </div>
            <div className="basis-3/5 p-2 pr-7 flex flex-col justify-center gap-8">
                <h1 className='font-rubik font-bold text-3xl text-secondary'>Who am I ?</h1>
                <p className='font-medium text-justify text-lg font-sora'>
                    I'm a software engineer intrerested in building stuffs on the web. 
                    <br /><br />
                    Although my current focus is on building engaging and interactive user interfaces, I have a strong background in backend development also.
                    <br /><br />
                    I'm curious about tech and have a hunger for learning them.
                </p>
                {/* <p>Building things on web were always interesting for me thats why I chose to become a web developer after college. Lately, I figured out that my designing skills are not that bad, so you can say that, I am one of those guys who can do both coding and designing.</p> */}
            </div>
        </div>
    </div>
  )
}

export default About