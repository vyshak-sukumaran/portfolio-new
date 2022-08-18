import React, { useState } from 'react'
import HamburgerIcon from '../../public/hamburger.svg'
import HomeIcon from '../../public/home.svg'
import AboutIcon from '../../public/about.svg'
import SkillsIcon from '../../public/skills.svg'
import ProjectsIcon from '../../public/projects.svg'
import ContactIcon from '../../public/contact.svg'
import HamburgerButton from '../buttons/HamburgerButton'
import ClassicButton from '../buttons/ClassicButton'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleClickHome = () => {
        console.log('go home');
    }
    const handleClickAbout = () => {
        console.log('go about');
    }
    const handleClickSkills = () => {
        console.log('go skills');
    }
    const handleClickProjects = () => {
        console.log('go projects');
    }
    const handleClickContact = () => {
        console.log('go contact');
    }

    return (
        <nav className='fixed top-0 left-0 w-fit p-2 z-10'>
            <ul className='flex flex-col gap-3'>
                <li className='flex gap-2 items-center justify-center relative'>
                    <HamburgerButton
                        isOpen={isOpen}
                        handleClick={handleToggle}
                    >
                        <HamburgerIcon className="w-8 h-8" />
                    </HamburgerButton>
                    {/* <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-44 font-rubik font-medium text-2xl text-secondary`}>Vyshak T</div> */}
                </li>

                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton 
                    icon
                    handleClick={handleClickHome}
                    >
                        <HomeIcon className="w-6 h-6" />
                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-28 text-primary font-medium`}>Home</div>
                </li>
                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton 
                    icon
                    handleClick={handleClickAbout}
                    >
                        <AboutIcon className="w-6 h-6" />
                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-28 text-primary font-medium`}>About</div>
                </li>
                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton 
                    icon
                    handleClick={handleClickSkills}
                    >
                        <SkillsIcon className="w-6 h-6" />
                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-28 text-primary font-medium`}>Skills</div>
                </li>
                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton 
                    icon
                    handleClick={handleClickProjects}
                    >
                        <ProjectsIcon className="w-6 h-6" />
                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-32 text-primary font-medium`}>Projects</div>
                </li>
                <li className='flex gap-2 items-center justify-center relative'>
                    <ClassicButton 
                    icon
                    handleClick={handleClickContact}
                    >
                        <ContactIcon className="w-6 h-6" />
                    </ClassicButton>
                    <div className={`${!isOpen ? "hidden" : "block"} animate-slide-in absolute -mr-32 text-primary font-medium`}>Contact</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar