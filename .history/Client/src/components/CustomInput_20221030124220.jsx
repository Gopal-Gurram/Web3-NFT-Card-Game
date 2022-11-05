import React from 'react'
import styles from '../styles'
const CustomInput = ({label,placeHolder,value,handleValueChange}) => {
  return (
    <>
    <label htmlFor='name' className={styles.label} >{label}</label>
    </>
  )
}

export default CustomInput