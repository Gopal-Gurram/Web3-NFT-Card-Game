import React from 'react';
import PageHOC from '../components/PageHOC';

const Home = () => {
  return (
    <div>
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to the Avax Gods <br /> A WEb3 NFT Card Game</>,
  <>Connect your wallet to start playing <br /> The ultimate Web3 Card Game</>
);