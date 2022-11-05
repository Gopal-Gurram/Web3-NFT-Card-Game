import React from 'react'
import {useNavigate} from "react-router-dom";
import {log,heroImg} from "../assets";
import styles  from '../styles';

const pageHOC = (Component,title,description)  => () => {
    const navigate = useNavigate();
  return (
    <div>pageHOC</div>
  )
}

export default pageHOC