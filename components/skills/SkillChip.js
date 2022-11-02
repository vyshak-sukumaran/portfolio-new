import React from 'react'
import PropTypes from 'prop-types'

const SkillChip = ({Icon, title}) => {
  return (
    <div className="w-fit h-fit p-2 px-4 bg-gray-light shadow-sm rounded-full flex items-center gap-2 sm:p-3 sm:px-5">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className='text-xs text-black font-inter font-medium tracking-normal sm:text-sm'>{title}</span>
    </div>
  )
}

SkillChip.propTypes = {
  title : PropTypes.string.isRequired,
  Icon : PropTypes.elementType.isRequired
}

export default SkillChip