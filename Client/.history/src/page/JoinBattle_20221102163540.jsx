import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { CustomButton, PageHOC } from "../components";
import styles from "../styles";

const JoinBattle = () => {
  const {walletAddress , gameData } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <>
      <h2 className={styles.joinHeadText}>Available Battles:</h2>

      <div className={styles.joinContainer}>
{gameData.pendingBattles.length ? gameData.pendingBattles.filter( (battle) => !battle.players.includes(walletAddress))
.map( (battle,index) => (
  <div key={battle.name + index} className={styles.flexBetween}></div>
<p className={styles.joinBattleTitle}>{index + 1}.{battle.name}</p>
  ))}
      </div>
      <p className={styles.infoText} onClick={() => navigate("/create-battle")}>
        Or create a new battle
      </p>
    </>
  );
};

export default PageHOC(
  JoinBattle,
  <p>
    Join <br /> a Battle{" "}
  </p>,
  <>Join already existing battle</>
);
