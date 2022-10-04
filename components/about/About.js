import Image from 'next/image'
import React, { useRef } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver'
import SkillChip from './SkillChip'
import HtmlIcon from '../../assets/skills/html.svg'
import CssIcon from '../../assets/skills/css.svg'
import JscriptIcon from '../../assets/skills/jscript.svg'
import TscriptIcon from '../../assets/skills/tscript.svg'
import ReactIcon from '../../assets/skills/react.svg'
import NextIcon from '../../assets/skills/next.svg'
import ViteIcon from '../../assets/skills/vite.svg'
import ReduxIcon from '../../assets/skills/redux.svg'
import SwrIcon from '../../assets/skills/swr.svg'
import TwindIcon from '../../assets/skills/twind.svg'
import MuiIcon from '../../assets/skills/mui.svg'
import StyledIcon from '../../assets/skills/styled.svg'
import FigmaIcon from '../../assets/skills/figma.svg'
import PythonIcon from '../../assets/skills/python.svg'
import DjangoIcon from '../../assets/skills/django.svg'
import PostgresIcon from '../../assets/skills/postgres.svg'
import DockerIcon from '../../assets/skills/docker.svg'
import NginxIcon from '../../assets/skills/nginx.svg'

const About = () => {
    const ref = useRef(null)
    const intersecting = useIntersectionObserver(ref, {})

    return (
        <div id='about' className='w-full min-h-[700px] relative p-4'>
            <div className="h-16 w-full"></div>
            <div className='w-full max-w-lg h-full mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl'>
                <header>
                    <h1
                        ref={ref}
                        className={`font-rubik font-bold text-xl text-primary text-center uppercase md:text-2xl lg:text-3xl xl:text-4xl`}
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
                <section className='font-ibm text-sm text-black tracking-wide mt-8 lg:text-base'>
                    <aside className='float-left pr-4 pb-2'>
                        <div className='w-fit h-fit rounded-full border-4 border-primary'>
                            <figure className="w-24 h-24 rounded-full overflow-hidden border-2 border-white relative pointer-events-none md:w-32 md:h-32 lg:w-36 lg:h-36">
                                <Image priority src="https://ucarecdn.com/d95ea986-cc01-42d7-8dc3-9fea52558cdf/vyshak1.png" alt='me' layout='fill' />
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
                    <p>Although I&apos;m more of a developer than a typical designer, I can design small projects with ease. Figma is the tool that I like most when it comes to designing. </p>
                    <br />
                    <SkillChip title="Figma" Icon={FigmaIcon} />
                </section>
                <br />
                <section className='font-ibm text-sm text-black tracking-wide lg:text-base'>
                    <h2 className='text-primary text-lg font-bold font-rubik lg:text-xl'>Back-end Developer</h2>
                    <br />
                    <p>I use Python for developing highly performant server side. I have good knowledge in Django framework and I felt it easy for creating Restful Apis using it.</p>
                    <br />
                    <p>My primary focus is on the development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end.</p>
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