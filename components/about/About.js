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
                    <p>I&apos;m a Software Engineer specializing in developing exceptional web experiences. I create successful websites that are fast, easy to use, and built with best practices.</p>
                    <br />
                    <p>I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. Regardless of your specific business requirements, in solving these challenges, you have a great chance of finding success online.</p>
                    <br />
                    <p>My main experience is in full stack development but I&apos;m more passionate towards front-end development and designing. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences.</p>
                </section>
                <br />
                <section className='font-ibm text-sm text-black tracking-wide lg:text-base'>
                    <h2 className='text-primary text-lg font-bold font-rubik lg:text-xl'>Front-end Developer</h2>
                    <br />
                    <p>I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser.</p>
                    <br />
                    <p>I write standards based code that is semantic, accessible, type safe, easy to maintain, cross browser compatible, and performant. </p>
                </section>
                <br />
                <section className='font-ibm text-sm text-black tracking-wide lg:text-base'>
                    <h3 className='text-primary text-base font-bold font-rubik lg:text-xl'>Skills</h3>
                    <br />
                    <div className='flex gap-3 flex-wrap items-center'>
                        <SkillChip title="HTML" Icon={HtmlIcon} />
                        <SkillChip title="CSS" Icon={CssIcon} />
                        <SkillChip title="JavaScript" Icon={JscriptIcon} />
                        <SkillChip title="TypeScript" Icon={TscriptIcon} />
                        <SkillChip title="React Js" Icon={ReactIcon} />
                        <SkillChip title="Next Js" Icon={NextIcon} />
                        <SkillChip title="Vite Js" Icon={ViteIcon} />
                        <SkillChip title="Redux" Icon={ReduxIcon} />
                        <SkillChip title="SWR" Icon={SwrIcon} />
                        <SkillChip title="Tailwind CSS" Icon={TwindIcon} />
                        <SkillChip title="Material UI" Icon={MuiIcon} />
                        <SkillChip title="Styled" Icon={StyledIcon} />
                    </div>
                    <br />
                    <p>Although I&apos;m more of a developer than a typical designer, I&apos;m a good designer too. Figma is the tool that I like most when it comes to designing. </p>
                    <br />
                    <SkillChip title="Figma" Icon={FigmaIcon} />
                </section>
                <br />
                <section className='font-ibm text-sm text-black tracking-wide lg:text-base'>
                    <h2 className='text-primary text-lg font-bold font-rubik lg:text-xl'>Back-end Developer</h2>
                    <br />
                    <p>I use Python for developing highly performant server side. I have good knowledge in Django framework and I felt it easy for creating Restful Apis using it.</p>
                    <br />
                    <p>I like to ensure the performance of front-end is smooth by developing a back-end that consists of efficient business logic, well designed and manageable database schema and documented Api endpoints. This will make responsiveness to requests from front-end a lot more performant. I also have experience in using Docker which is very useful for maintaining and scaling large applications.</p>
                    <br />
                    <p>I give priority towards security and data protection when it comes to back-end. I like to optimize the application for maximum speed and scalability.</p>
                    
                </section>
                <br />
                <section>
                    <h3 className='text-primary text-base font-bold font-rubik tracking-wide lg:text-xl'>Skills</h3>
                    <br />
                    <div className='flex gap-3 flex-wrap items-center'>
                        <SkillChip title="Python" Icon={PythonIcon} />
                        <SkillChip title="Django" Icon={DjangoIcon} />
                        <SkillChip title="Postgres DB" Icon={PostgresIcon} />
                        <SkillChip title="Nginx" Icon={NginxIcon} />
                        <SkillChip title="Docker" Icon={DockerIcon} />
                    </div>
                </section>
            </div>
            <div className="h-24 w-full"></div>
        </div>
    )
}

export default About
