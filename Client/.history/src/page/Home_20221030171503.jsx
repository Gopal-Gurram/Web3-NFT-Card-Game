import { useState } from "react";
import { PageHOC, CustomInput, CustomButton } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");

const handleClick = async () => {
    try {
      
      console.log(contract);
      const playerExists = await contract.isPlayer(walletAddress);

      if (!playerExists) {
        await contract.registerPlayer(playerName, playerName, { gasLimit: 500000 });

        setShowAlert({
          status: true,
          type: 'info',
          message: `${playerName} is being summoned!`,
        });

        setTimeout(() => navigate('/create-battle'), 8000);
      }
    } catch (error) {
     setShowAlert({
          status: true,
          type: 'failure',
          message: `Something went wrong`,
        });
    }
  };

  return (
    <div className="flex flex-col">
      <CustomInput
        label="Name"
        placeHolder="Enter your player name"
        value={playerName}
        handleValueChange={setPlayerName}
      />
      <CustomButton
        title="Register"
        handleClick={handleClick}
        restStyles="mt-6"
      />
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to the Avax Gods <br /> A WEb3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> The ultimate Web3 Card Game
  </>
);
