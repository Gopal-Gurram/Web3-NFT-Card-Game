import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useGlobalContext} from "../context"
import {customButton , PageHOC} from "../components"


const JoinBattle = () => {
  return (
    <div>JoinBattle</div>
  )
}

export default PageHOC(
    JoinBattle
)