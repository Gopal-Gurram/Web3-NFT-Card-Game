import React , {useEffect , useStatus} from 'react';
import PageHOC from '../components';
import { useGlobalContext } from '../context';
import styles from '../styles';


const CreateBattle = () => {
  return (
    <>
      
    </>
  )
};

export default PageHOC(
  CreateBattle,
  <>Create <br /> a new Battle</>,
  <> Create a battle for you and wait for the others players to join you</>
);