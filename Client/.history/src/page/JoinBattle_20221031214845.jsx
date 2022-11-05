import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useGlobalContext} from "../context"
import {customButton , PageHOC} from "../components"
import styles from '../styles'


const JoinBattle = () => {
  return (
    <div>JoinBattle</div>
  )
}

export default PageHOC(
    JoinBattle,
    <p>Join <br /> a Battle </p>,
    <>Join already existing battle</>
)