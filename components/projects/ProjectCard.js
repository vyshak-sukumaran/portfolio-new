import Image from 'next/image'
import React from 'react'
import Button from '../buttons/Button'
import PropTypes from 'prop-types'

const ProjectCard = ({image, link, title, body, stack}) => {
    return (
        <div className='w-full h-fit mx-auto relative bg-white rounded-lg overflow-hidden shadow-lg flex flex-col pb-12 md:flex-row md:pb-0'>
            <div className='w-full h-56 relative pointer-events-none overflow-hidden shrink-0 md:w-80 md:h-52 lg:w-96 lg:h-56'>
                <Image src={image} alt="proj" layout='fill' objectFit='cover' />
            </div>
            <div className="grow box-border text-sm font-ibm text-black p-2 flex flex-col gap-4 lg:text-base">
                <h1 className='text-lg font-rubik font-medium'>{title}</h1>
                <div className='flex-grow'>
                    <p>{body}</p>
                    <p className="mt-3">
                        <span className='font-medium'>Stack used : </span>
                        {stack}
                    </p>
                </div>
                <div className="w-fit absolute bottom-2 right-2">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Button small>Open</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    stack: PropTypes.string
}

export default ProjectCard