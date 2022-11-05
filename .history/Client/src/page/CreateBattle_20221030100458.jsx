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
  <>Create <br /> a new Battle</>,
  <> Create a battle for you and wait for the others players to join you</>
);