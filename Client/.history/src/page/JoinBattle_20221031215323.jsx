import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useGlobalContext} from "../context"
import {CustomButton , PageHOC} from "../components"
import styles from '../styles'


const JoinBattle = () => {
  return (
   
   <>
   <h2 className={styles.joinHeadText}>Available Battles:</h2>
   <p className={styles.infoText}>Or create a new battle</p>
   </>
  )
}

export default PageHOC(
    JoinBattle,
    <p>Join <br /> a Battle </p>,
    <>Join already existing battle</>
)