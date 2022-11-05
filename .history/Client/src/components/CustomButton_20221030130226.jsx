import React from 'react'

const CustomButton = ({title,restStyles,handleClick}) => {
  return (
    <button
    type='button'
    className={`${styles.btn} ${restStyles}`}
    onClick = {handleClick}>
        
    </button>
  )
}

export default CustomButton