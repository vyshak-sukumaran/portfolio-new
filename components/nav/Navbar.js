import React, { useEffect, useState } from 'react'
import LogoIcon from '../../assets/logo.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if(!open) return

        const elem = document.querySelector("#main")
        const handleScroll = (e) => {
            setOpen(false)
        }
        elem.addEventListener("scroll", handleScroll, false)
        return () => {
            elem.removeEventListener("scroll", handleScroll, false)
        }
    }, [open])

    return (
        <>
            <nav className="w-full h-0 sticky top-0 left-0 z-50">
                <div className='w-fit h-16 box-border ml-15 flex items-center justify-between'>
                    <div className='pl-5 shrink-0 w-28 flex justify-center'>
                        <LogoIcon className="w-8 h-8" />
                    </div>
                    <div className='h-6 border-l border-gray-dark shrink-0'></div>
                    <div className='w-28 flex justify-center'>
                        <button
                            type='button'
                            onClick={handleClick}
                            className='font-inter font-semibold text-sm bg-transparent border-none outline-none transition-all tracking-wide hover:tracking-widest'
                        >
                            {!open ? "MENU" : "CLOSE"}
                        </button>
                    </div>
                </div>
                {/* <ul className="flex list-none gap-11 font-rubik uppercase font-bold text-md text-black tracking-widest">
            <li className='transition-colors ease-in hover:text-secondary hover:cursor-pointer'>
                <a href="#home">Home</a>
            </li>
            <li className='transition-colors ease-in hover:text-secondary hover:cursor-pointer'>
                <a href="#about">About</a>
            </li>
            <li className='transition-colors ease-in hover:text-secondary hover:cursor-pointer'>
                <a href="#skills">Skills</a>
            </li>
            <li className='transition-colors ease-in hover:text-secondary hover:cursor-pointer'>
                <a href="#projects">Projects</a>
            </li>
            <li className='transition-colors ease-in hover:text-secondary hover:cursor-pointer'>
                <a href="#contact">Contact!</a>
            </li>
        </ul> */}

            </nav>
            <div className={`fixed z-40 top-0 left-0 bg-secondary w-full h-screen box-border transition-all ease-down duration-700 ${!open ? "opacity-0 -translate-y-[999px]" : "opacity-100 -translate-y-0"}`}>
                <ul className='list-none mt-20 max-w-[1266px] mx-auto text-6xl tracking-wider text-black font-bold font-rubik leading-snug uppper'>
                    <li className='hover:text-gray transition-all w-fit'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='hover:text-gray transition-all w-fit'>
                        <a href="#about">About</a>
                    </li>
                    <li className='hover:text-gray transition-all w-fit'>
                        <a href="#projects">Works</a>
                    </li>
                    <li className='hover:text-gray transition-all w-fit'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar;