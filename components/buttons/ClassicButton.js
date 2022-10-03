import React from 'react'
import PropTypes from 'prop-types'

const ClassicButton = ({ children, type, handleClick, icon, small, disabled }) => {
    return (
        <div className={`relative ${icon ? 'w-12 h-12': small ? 'w-24 h-10': 'w-28 h-12'}`}>
            <button
                type={type ? type : "button"}
                className="w-full h-full rounded-full text-center flex justify-center items-center bg-primary text-white font-semibold z-10 uppercase font-inter tracking-wider text-sm"
                onClick={handleClick ? handleClick : null}
                disabled={disabled ? true : false}
            >
                {children}
            </button>
        </div>
    )
}

ClassicButton.propTypes = {
    children : PropTypes.elementType.isRequired,
    type : PropTypes.string,
    handleClick : PropTypes.func,
    icon : PropTypes.bool,
    disabled: PropTypes.bool
}

export default ClassicButton