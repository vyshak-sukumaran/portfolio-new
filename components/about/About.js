import Image from 'next/image'
import React, { useRef } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver'

const About = () => {
    const ref = useRef(null)
    const intersecting = useIntersectionObserver(ref, {})

    return (
        <div id='about' className='w-full h-screen min-h-[700px] relative'>
            <div className="absolute w-11/12 max-w-sm min-h-[26rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 rounded-xl bg-white border-[1px] border-grey shadow-sm flex flex-col
            sm:max-w-md lg:flex-row lg:max-w-2xl xl:max-w-3xl">
                <div className="basis-2/5 p-2 flex justify-center items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] shadow-blue border-secondary relative pointer-events-none lg:w-36 lg:h-36 xl:w-44 xl:h-44">
                        <Image priority src="https://ucarecdn.com/d95ea986-cc01-42d7-8dc3-9fea52558cdf/vyshak1.png" alt='me' layout='fill' />
                    </div>
                </div>
                <div className="basis-3/5 p-2 flex flex-col justify-center gap-8 lg:pr-5">

                    <h1
                        ref={ref}
                        className={`font-rubik font-bold text-2xl text-secondary text-center lg:text-left lg:text-3xl xl:text-4xl`}
                    >
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "022ms"}}>W</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "122ms"}}>h</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "222ms"}}>o</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "322ms"}}>&nbsp;</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "422ms"}}>a</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "522ms"}}>m</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "622ms"}}>&nbsp;</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "722ms"}}>I</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "822ms"}}>&nbsp;</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{animationDelay: "922ms"}}>?</span>
                    </h1>
                    {/* <TitleOne title="Who am I ?" /> */}

                    <p className='font-medium text-justify text-sm font-sora text-black lg:text-base'>
                        I&apos;m a software engineer intrerested in building stuffs on the web.
                        <br /><br />
                        Although my current focus is on building engaging and interactive user interfaces, I have a strong background in backend development also.
                        <br /><br />
                        I&apos;m curious about tech and have a hunger for learning them.
                    </p>
                    {/* <p>Building things on web were always interesting for me thats why I chose to become a web developer after college. Lately, I figured out that my designing skills are not that bad, so you can say that, I am one of those guys who can do both coding and designing.</p> */}
                </div>
            </div>
        </div>
    )
}

export default About