import React from 'react';
import PageHOC from '../components/PageHOC';
import { useGlobalContext } from '../context';

const Home = () => {
  const {home} = useGlobalContext();
  return (
    <div>
      <h1>{home}</h1>
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to the Avax Gods <br /> A WEb3 NFT Card Game</>,
  <>Connect your wallet to start playing <br /> The ultimate Web3 Card Game</>
);