import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Navbar = () => {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChanged = (url, { shallow }) => {
            console.log("asdf");
        }
        router.events.on("routeChangeStart", handleRouteChanged)

        return () => {
            router.events.off("routeChangeStart", handleRouteChanged)
        }
    }, [])
  return (
    <nav className="w-full h-16 bg-white absolute top-0 left-0 flex justify-center items-center z-50">
        <ul className="flex list-none gap-11 font-rubik uppercase font-bold text-md text-black tracking-widest">
            <li className='transition-colors ease-in hover:text-primary hover:cursor-pointer'>
                <a href="#home">Home</a>
            </li>
            <li className='transition-colors ease-in hover:text-primary hover:cursor-pointer'>
                <a href="#about">About</a>
            </li>
            <li className='transition-colors ease-in hover:text-primary hover:cursor-pointer'>
                <a href="#skills">Skills</a>
            </li>
            <li className='transition-colors ease-in hover:text-primary hover:cursor-pointer'>
                <a href="#projects">Projects</a>
            </li>
            <li className='transition-colors ease-in hover:text-primary hover:cursor-pointer'>
                <a href="#contact">Contact!</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar