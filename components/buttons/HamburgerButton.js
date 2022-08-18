import React from 'react'
import PropTypes from 'prop-types'

const HamburgerButton = ({ isOpen, handleClick }) => {
    return (
        <button
            type='button'
            className='bg-primary w-16 h-16 rounded-full border-[3px] border-secondary'
            onClick={handleClick}
        >
            <div className='relative w-full h-full'>
                <div className={`absolute left-0 right-0 ml-auto mr-auto h-1 rounded-full bg-white transition-all duration-150 ease-in-out ${isOpen ? 'top-7 w-9 rotate-45' : 'top-4 w-7'}`}></div>
                <div className={`absolute top-7 left-0 right-0 ml-auto mr-auto w-7 h-1 rounded-full bg-white transition-all duration-150 ease-in-out ${isOpen && 'hidden'}`}></div>
                <div className={`absolute left-0 right-0 ml-auto mr-auto h-1 rounded-full bg-white transition-all duration-150 ease-in-out ${isOpen ? 'top-7 w-9 -rotate-45' : 'top-10 w-7'}`}></div>
            </div>
        </button>
    )
}

HamburgerButton.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default HamburgerButton