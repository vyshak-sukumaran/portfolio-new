import React from 'react'
import PropTypes from 'prop-types'

const ClassicButton = ({ children, type, handleClick, icon, small }) => {
    return (
        <div className={`relative ${icon ? 'w-12 h-12': small ? 'w-28 h-12': 'w-32 h-16'}`}>
            <button
                type={type ? type : "button"}
                className="w-[calc(100%-0.2rem)] h-[calc(100%-0.2rem)] rounded-full text-center flex justify-center items-center border-[3px] border-secondary text-secondary font-semibold z-10 absolute top-0 right-0 bg-white transition-all ease-in-out duration-150 hover:bg-moon active:bg-moon active:top-[0.2rem] active:right-[0.2rem]"
                onClick={handleClick ? handleClick : null}
            >
                {children}
            </button>
            <div className='w-[calc(100%-0.2rem)] h-[calc(100%-0.2rem)] rounded-full absolute bottom-0 left-0 bg-primary blur-xs'></div>
        </div>
    )
}

ClassicButton.propTypes = {
    children : PropTypes.any.isRequired,
    type : PropTypes.string,
    handleClick : PropTypes.func,
    icon : PropTypes.bool
}

export default ClassicButton