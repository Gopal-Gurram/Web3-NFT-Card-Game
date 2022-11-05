import React from 'react'
import styles from '../styles'

const CustomButton = ({title,handleClick,restStyles}) => {
  return (
    <button
    type='button'
    className={`${styles.btn} ${restStyles}`}
    onClick = {handleClick} >
        
        
    </button>
  )
}

export default CustomButton