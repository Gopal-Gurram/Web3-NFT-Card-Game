import React from "react";
import { AlertIcon } from "../assets";
import styles from "../styles";

const Alert = ({ type, message }) => {
  return (
    <div className={`${styles.alertContainer} ${styles.flexCenter}`}>
      <duv className={`${styles.alertWrapper} ${styles.type}`}>
        <AlertIcon type={type} />
        {message}
      </duv>
    </div>
  );
};

export default Alert;
