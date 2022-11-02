import Image from 'next/image'
import React, { useRef } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const About = () => {
    const ref = useRef(null)
    const intersecting = useIntersectionObserver(ref, {})

    return (
        <div id='about' className='w-full min-h-[700px] relative p-4'>
            <div className="h-28 w-full"></div>
            <div className='w-full h-full mx-auto max-w-lg sm:max-w-4xl'>
                <header>
                    <h1
                        ref={ref}
                        className={`font-rubik font-bold text-2xl text-primary text-center uppercase md:text-3xl lg:text-4xl`}
                    >
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "022ms" }}>W</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "122ms" }}>h</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "222ms" }}>o</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "322ms" }}>&nbsp;</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "422ms" }}>a</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "522ms" }}>m</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "622ms" }}>&nbsp;</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "722ms" }}>I</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "822ms" }}>&nbsp;</span>
                        <span className={`opacity-0 ${intersecting && 'inline-block animate-wobble'}`} style={{ animationDelay: "922ms" }}>?</span>
                    </h1>
                </header>
                <section className='font-ibm text-sm text-black tracking-wide mt-8 flex flex-col-reverse sm:flex-row sm:text-base md:text-lg lg:text-xl'>
                    <aside className='pr-4 pb-2'>
                        <div className='w-fit h-fit mx-auto mt-5 sm:mt-0'>
                            <figure className="overflow-hidden border-2 border-white relative pointer-events-none w-[166px] h-[222px] md:w-[200px] md:h-[266px] lg:w-[250px] lg:h-[333px]">
                                <Image priority src="https://ucarecdn.com/ea43bcb7-73ba-4c2f-a7b5-12e3cd2641bc/vk.jpg" alt='me' layout='fill' />
                            </figure>
                        </div>
                    </aside>
                    <div>
                        <p>I&apos;m a Software Engineer specializing in developing exceptional web experiences. I create successful websites that are fast, easy to use, and built with best practices.</p>
                        <br />
                        <p>My main experience is in full stack development but I&apos;m more passionate towards front-end development and designing. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences.</p>
                        <br />
                        <p>For me, look and feel is the most important thing when using web. That&apos;s why I give more focus towards front-end development nowadays.</p>
                    </div>
                </section>
            </div>
            <div className="h-24 w-full"></div>
        </div>
    )
}

export default About
