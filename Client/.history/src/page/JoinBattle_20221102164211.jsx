import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { CustomButton, PageHOC } from "../components";
import styles from "../styles";

const JoinBattle = () => {
  const { contract, gameData, setShowAlert, setBattleName, setErrorMessage, walletAddress } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <>
      <h2 className={styles.joinHeadText}>Available Battles:</h2>

      <div className={styles.joinContainer}>
        {gameData.pendingBattles.length ? (
          gameData.pendingBattles
            .filter((battle) => !battle.players.includes(walletAddress))
            .map((battle, index) => (
              <div key={battle.name + index} className={styles.flexBetween}>
                <p className={styles.joinBattleTitle}>
                  {index + 1}.{battle.name}
                </p>
                <CustomButton
                  title="join"
                  handleClick={() => handleClick(battle.name)}
                />
              </div>
            ))
        ) : (
          <p className={styles.joinLoading}>
            {" "}
            Reload the page to see the new battles.
          </p>
        )}
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
