import React from 'react'
import styles from '../styles'

const regex = /^[A-Za-z0-9]+$/;
const CustomInput = ({label,placeHolder,value,handleValueChange}) => {
  return (
    <>
    <label htmlFor='name' className={styles.label} >{label}</label>
    <input type='text'></input>
    </>
  )
}

export default CustomInput