import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, size, disabled, fullWidth, handleClick, children }) => {
    return (
        <button
            type={type ? type : "button"}
            className={`bg-primary text-white z-20 rounded-full shadow-md uppercase font-inter tracking-wide font-medium
            ${size === "small" ?
                    "p-1 px-3 text-xs"
                    :
                    size === "large" ?
                        "p-3 px-6 text-md"
                        :
                        "p-2 px-5 text-xs"
                } ${fullWidth ? "w-full" : null}`}
            onClick={handleClick}
            disabled={disabled ? true : false}
        >
            {children}
        </button>
    )
}
Button.propTypes = {
    children: PropTypes.elementType.isRequired,
    type: PropTypes.string,
    size: PropTypes.string,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
}


export default Button