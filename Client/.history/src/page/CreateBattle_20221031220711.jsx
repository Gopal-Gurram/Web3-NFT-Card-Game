import React, { useEffect, useStatus } from "react";
import { PageHOC, CustomButton, CustomInput } from "../components";
import { useGlobalContext } from "../context";
import styles from "../styles";
import { useNavigate } from "react-router-dom";

const CreateBattle = () => {
  const { contract, battleName, setBattleName } = useGlobalContext();
  const navigate = useNavigate();

  const handleClick = async() => {
if(!battleName || !battleName.trim()) return null;
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
