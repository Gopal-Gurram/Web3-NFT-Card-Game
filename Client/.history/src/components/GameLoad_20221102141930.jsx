import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import CustomButton from "./CustomButton";
import { player01, player02 } from "../assets";
import styles from "../styles";

const GameLoad = () => {
  const { walletAddress } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div className={`${styles.flexBetween} ${styles.gameLoadContainer}`}>
      <div className={styles.gameLoadBtnBox}>
        <CustomButton
          title="Choose a battleground"
          handleClick={() => navigate("/battleground")}
          restStyles="mt-6"
        />
      </div>
      <div className={`flex-1 ${styles.flexCenter} flex-col`}>
        <h1 className={`${styles.headText} text-center`}>
          Waiting for a <br /> Worthy opponent.....
        </h1>
        <p className={styles.gameLoadText}>
        
          Protip: while you're waiting, choose your preferred battleground
        </p>
      </div>
    </div>
  );
};

export default GameLoad;
