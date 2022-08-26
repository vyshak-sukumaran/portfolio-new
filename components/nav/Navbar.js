import React, { useState } from 'react'
import HomeIcon from '../../assets/home.svg'
import AboutIcon from '../../assets/about.svg'
import SkillsIcon from '../../assets/skills.svg'
import ProjectsIcon from '../../assets/projects.svg'
import ContactIcon from '../../assets/contact.svg'
import HamburgerButton from '../buttons/HamburgerButton'
import ClassicButton from '../buttons/ClassicButton'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='sticky top-0 left-0 w-fit h-0 z-10'>
            <div className='flex gap-2 pt-2 pl-2 items-center justify-start relative -translate-x-20 animate-slide-in z-10' style={{ animationDelay: "2022ms" }}>
                <HamburgerButton
                    isOpen={isOpen}
                    handleClick={handleToggle}
                />
            </div>
            <div className={`${!isOpen ? 'opacity-0 -translate-x-32 w-0' : 'opacity-100 translate-x-0  w-60'} h-screen bg-moon absolute top-0 left-0 transition-all duration-300`}></div>
            <ul className={`${!isOpen ? 'opacity-0 -translate-x-32 w-0 md:opacity-100 md:translate-x-0 md:w-auto' : 'opacity-100 translate-x-0 w-auto'} p-2 flex flex-col gap-3 list-none transition-all duration-300`}>

                <li className='flex gap-2 items-center justify-start relative -translate-x-20 animate-slide-in' style={{ animationDelay: "2044ms" }}>
                    <ClassicButton
                        icon
                    >
                        <a href="#home" className='w-full h-full flex justify-center items-center'>
                            <HomeIcon className="w-5 h-5" />
                        </a>

                    </ClassicButton>
                    <div className={`${!isOpen ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"} transition-all duration-500 -mr-28 text-secondary font-medium`}>Home</div>
                </li>
                <li className='flex gap-2 items-center justify-start relative -translate-x-20 animate-slide-in' style={{ animationDelay: "2066ms" }}>
                    <ClassicButton
                        icon
                    >
                        <a href="#about" className='w-full h-full flex justify-center items-center'>
                            <AboutIcon className="w-5 h-5" />
                        </a>

                    </ClassicButton>
                    <div className={`${!isOpen ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"} transition-all duration-500 -mr-28 text-secondary font-medium`}>About</div>
                </li>
                <li className='flex gap-2 items-center justify-start relative -translate-x-20 animate-slide-in' style={{ animationDelay: "2088ms" }}>
                    <ClassicButton
                        icon
                    >
                        <a href="#skills" className='w-full h-full flex justify-center items-center'>
                            <SkillsIcon className="w-5 h-5" />
                        </a>
                    </ClassicButton>
                    <div className={`${!isOpen ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"} transition-all duration-500 -mr-28 text-secondary font-medium`}>Skills</div>
                </li>
                <li className='flex gap-2 items-center justify-start relative -translate-x-20 animate-slide-in' style={{ animationDelay: "2110ms" }}>
                    <ClassicButton
                        icon
                    >
                        <a href="#projects" className='w-full h-full flex justify-center items-center'>
                            <ProjectsIcon className="w-5 h-5" />
                        </a>
                    </ClassicButton>
                    <div className={`${!isOpen ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"} transition-all duration-500 -mr-32 text-secondary font-medium`}>Projects</div>
                </li>
                <li className='flex gap-2 items-center justify-start relative -translate-x-20 animate-slide-in' style={{ animationDelay: "2132ms" }}>
                    <ClassicButton
                        icon
                    >
                        <a href="#contact" className='w-full h-full flex justify-center items-center'>
                            <ContactIcon className="w-5 h-5" />
                        </a>
                    </ClassicButton>
                    <div className={`${!isOpen ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"} transition-all duration-500 -mr-32 text-secondary font-medium`}>Contact</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar