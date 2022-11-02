import React, { useEffect, useRef, useState } from 'react'
import LogoIcon from '../../assets/logo.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [animate, setAnimate] = useState(false)
    const navRef = useRef(null)
    
    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const navElem = navRef.current
        setAnimate(false)
        if (!open || !navElem) return

        const handleTransitionEnd = (e) => {
            setAnimate(true)
        }
        
        navElem.addEventListener("transitionend", handleTransitionEnd)

        return () => {
            navElem.removeEventListener("transitionend", handleTransitionEnd)
        }
        
    }, [open])

    return (
        <>
            <nav className="w-full h-0 sticky top-0 left-0 z-50">
                <div className='w-full h-16 max-w-[1366px] mx-auto box-border flex items-center'>
                    <div className='px-2 shrink-0 w-16 flex justify-center xl:w-20'>
                        <LogoIcon className="w-6 h-6 xl:w-8 xl:h-8" />
                    </div>
                    <div className='h-6 border-l border-gray-dark shrink-0 xl:h-8'></div>
                    <div className='w-16 py-2 flex justify-center xl:w-20'>
                        <button
                            type='button'
                            onClick={handleClick}
                            className='font-inter text-black font-semibold text-xs bg-transparent border-none outline-none transition-all tracking-wide hover:tracking-widest xl:text-sm'
                        >
                            {!open ? "MENU" : "CLOSE"}
                        </button>
                    </div>
                </div>
            </nav>
            <div ref={navRef} className={`fixed z-40 top-0 left-0 bg-secondary w-full h-screen box-border transition-all ease-down duration-700 ${!open ? "opacity-0 -translate-y-[999px]" : "opacity-100 -translate-y-0"}`}>
                <ul className='list-none p-2 mt-20 max-w-7xl mx-auto text-5xl tracking-wider text-black font-bold font-rubik leading-snug upper lg:text-6xl lg:leading-normal'>
                    <li className='hover:text-gray transition-all w-fit overflow-hidden'>
                        <div className={`translate-y-[200px] rotate-[20deg] origin-top-right ${animate && "animate-slide-up"}`} style={{ animationDelay: '0ms' }}>
                            <a onClick={handleClick} href="#home">Home</a>
                        </div>
                    </li>
                    <li className='hover:text-gray transition-all w-fit overflow-hidden'>
                        <div className={`translate-y-[200px] rotate-[20deg] origin-top-right ${animate && "animate-slide-up"}`} style={{ animationDelay: '250ms' }}>
                            <a onClick={handleClick} href="#about">About</a>
                        </div>
                    </li>
                    <li className='hover:text-gray transition-all w-fit overflow-hidden'>
                        <div className={`translate-y-[200px] rotate-[20deg] origin-top-right ${animate && "animate-slide-up"}`} style={{ animationDelay: '500ms' }}>
                            <a onClick={handleClick} href="#projects">Works</a>
                        </div>
                    </li>
                    <li className='hover:text-gray transition-all w-fit overflow-hidden'>
                        <div className={`translate-y-[200px] rotate-[20deg] origin-top-right ${animate && "animate-slide-up"}`} style={{ animationDelay: '750ms' }}>
                            <a onClick={handleClick} href="#contact">Contact</a>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar;