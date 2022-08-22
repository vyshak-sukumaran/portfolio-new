import React, { useState } from 'react'
import HamburgerIcon from '../../assets/hamburger.svg'
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
        <nav className='fixed top-0 left-0 w-fit p-2 z-10'>
            <ul className='flex flex-col gap-3 list-none'>
                <li className='flex gap-2 items-center justify-center relative'>
                    <HamburgerButton
                        isOpen={isOpen}
                        handleClick={handleToggle}
                    >
                        <HamburgerIcon className="w-8 h-8" />
                    </HamburgerButton>
                </li>

                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton
                        icon
                    >
                        <a href="#home" className='w-full h-full flex justify-center items-center'>
                            <HomeIcon className="w-6 h-6" />
                        </a>

                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-28 text-secondary font-medium`}>Home</div>
                </li>
                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton
                        icon
                    >
                        <a href="#about" className='w-full h-full flex justify-center items-center'>
                            <AboutIcon className="w-6 h-6" />
                        </a>

                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-28 text-secondary font-medium`}>About</div>
                </li>
                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton
                        icon
                    >
                        <a href="#skills" className='w-full h-full flex justify-center items-center'>
                            <SkillsIcon className="w-6 h-6" />
                        </a>
                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-28 text-secondary font-medium`}>Skills</div>
                </li>
                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton
                        icon
                    >
                        <a href="#projects" className='w-full h-full flex justify-center items-center'>
                            <ProjectsIcon className="w-6 h-6" />
                        </a>
                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-32 text-secondary font-medium`}>Projects</div>
                </li>
                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton
                        icon
                    >
                        <a href="#contact" className='w-full h-full flex justify-center items-center'>
                            <ContactIcon className="w-6 h-6" />
                        </a>
                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-32 text-secondary font-medium`}>Contact</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar