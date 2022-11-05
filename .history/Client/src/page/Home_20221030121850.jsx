import React from "react";
import { PageHOC , CustomInput } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { contract , walletAddress } = useGlobalContext();
  const [playerName, setplayerName] = useState(second)
  return <div className="flex flex-col">
    <CustomInput label='name'
    placeHolder='Enter your player name'
    value={playerName}
    handleValueChange={setPlayerName}
    />
  </div>;
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
