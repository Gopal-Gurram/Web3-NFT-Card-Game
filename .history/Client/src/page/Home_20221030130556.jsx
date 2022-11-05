import {useState} from "react";
import { PageHOC , CustomInput  , CustomButton} from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { contract , walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = useState('')
  return <div className="flex flex-col">
    <CustomInput label='Name'
    placeHolder='Enter your player name'
    value={playerName}
    handleValueChange={setPlayerName}
    />
    <CustomButton 
    title="Register"
    handleClick={() => {}}
    restStyles='mt-6'
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
