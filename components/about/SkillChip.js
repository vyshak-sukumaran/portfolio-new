import React from 'react'
import PropTypes from 'prop-types'

const SkillChip = ({Icon, title}) => {
  return (
    <div className="w-fit h-fit p-3 px-5 bg-gray-light shadow-sm rounded-full flex items-center gap-2">
        <Icon className="w-7 h-7" />
        <span className='text-sm font-inter font-medium tracking-normal'>{title}</span>
    </div>
  )
}

SkillChip.propTypes = {
  title : PropTypes.string.isRequired,
  Icon : PropTypes.elementType.isRequired
}

export default SkillChip