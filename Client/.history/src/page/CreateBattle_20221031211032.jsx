import React , {useEffect , useStatus} from 'react';
import {PageHOC,CustomButton,CustomInput} from '../components';
import { useGlobalContext } from '../context';
import styles from '../styles';
import { useNavigate } from 'react-router-dom';


const CreateBattle = () => {
  const navigate = useNavigate();
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