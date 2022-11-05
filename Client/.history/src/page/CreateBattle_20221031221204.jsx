import React, { useEffect, useState} from "react";
import { PageHOC, CustomButton, CustomInput , GameLoad } from "../components";
import { useGlobalContext } from "../context";
import styles from "../styles";
import { useNavigate } from "react-router-dom";

const CreateBattle = () => {
  const { contract, battleName, setBattleName } = useGlobalContext();
  const [waitBattle, setWaitBattle] = useState(false);
  const navigate = useNavigate();

  const handleClick = async() => {
if(!battleName || !battleName.trim()) return null;
try {
await contract.createBattle(battleName);
setWaitBattle(true);
} catch(error) {
console.log(error);
}
  };
  return (
    <>
      <div className="flex flex-col mb-5">
        <CustomInput
          label="Battle"
          placeHolder="Enter Battle Name"
          value={battleName}
          handleValueChange={setBattleName}
        />
        <CustomButton
          title="Create Battle"
          handleClick={handleClick}
          restStyles="mt-6"
        />
      </div>
      <p className={styles.infoText} onClick={() => navigate("/join-battle")}>
        Or join already existing battles
      </p>
    </>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <> Create a battle for you and wait for the others players to join you</>
);
