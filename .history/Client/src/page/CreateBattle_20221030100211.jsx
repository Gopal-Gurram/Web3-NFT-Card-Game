import React from 'react';
import PageHOC from '../components/PageHOC';

const CreateBattle = () => {
  return (
    <div>
    </div>
  )
};

export default PageHOC(
  CreateBattle,
  <>Welcome to the Avax Gods <br /> A WEb3 NFT Card Game</>,
  <>Connect your wallet to start playing <br /> The ultimate Web3 Card Game</>
);