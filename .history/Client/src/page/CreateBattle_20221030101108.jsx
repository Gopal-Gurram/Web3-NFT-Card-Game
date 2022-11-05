import React from 'react';
import PageHOC from '../components/PageHOC';

const CreateBattle = () => {
  return (
    <div>
      <h1 className='text-white text-xl'>Hello from CreateBattle</h1>
    </div>
  )
};

export default PageHOC(
  CreateBattle,
  <>Create <br /> a new Battle</>,
  <> Create a battle for you and wait for the others players to join you</>
);