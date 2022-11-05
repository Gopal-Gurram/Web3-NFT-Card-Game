import React from 'react'
import {useNavigate} from "react-router-dom";
import {log,heroImg} from "../assets";
import styles  from '../styles';

const pageHOC = (Component,title,description)  => () => {
    const navigate = useNavigate();
  return (
    <div className={styles.hocContainer}>
<div className={styles.hocContentBox}>
<img src={logo} alt="logo" className={styles.hocLogo} onClick={ () => navigate("/")} />
</div>
    </div>
  )
}

export default pageHOC