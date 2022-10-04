import React, { useEffect, useState } from 'react'
import LogoIcon from '../../assets/logo.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (!open) return

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
                <div className='w-full h-16 max-w-7xl mx-auto box-border flex items-center'>
                    <div className='pl-2 shrink-0 w-16 flex justify-center'>
                        <LogoIcon className="w-6 h-6" />
                    </div>
                    <div className='h-6 border-l border-gray-dark shrink-0'></div>
                    <div className='w-16 pl-2 flex justify-center'>
                        <button
                            type='button'
                            onClick={handleClick}
                            className='font-inter text-black font-semibold text-xs bg-transparent border-none outline-none transition-all tracking-wide hover:tracking-widest'
                        >
                            {!open ? "MENU" : "CLOSE"}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`fixed z-40 top-0 left-0 bg-secondary w-full h-screen box-border transition-all ease-down duration-700 ${!open ? "opacity-0 -translate-y-[999px]" : "opacity-100 -translate-y-0"}`}>
                <ul className='list-none p-2 mt-20 max-w-7xl mx-auto text-5xl tracking-wider text-black font-bold font-rubik leading-snug uppper lg:text-6xl lg:leading-normal'>
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