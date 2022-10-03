import Image from 'next/image'
import React from 'react'
import Button from '../buttons/Button'
import PropTypes from 'prop-types'

const ProjectCard = ({image, link, title, body, stack}) => {
    return (
        <div className='w-full h-56 relative bg-white rounded-lg overflow-hidden shadow-lg flex'>
            <div className='w-96 h-56 relative pointer-events-none overflow-hidden shrink-0'>
                <Image src={image} alt="proj" layout='fill' objectFit='cover' />
            </div>
            <div className="grow box-border font-ibm p-2 flex flex-col gap-4">
                <h1 className='text-xl font-rubik font-medium'>{title}</h1>
                <div className='flex-grow'>
                    <p>{body}</p>
                    <p className="text-sm mt-3"><span className='text-base font-medium'>Stack used : </span>{stack}</p>
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