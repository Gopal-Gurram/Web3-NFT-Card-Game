import React , {useEffect , useStatus} from 'react';
import {PageHOC,CustomButton,CustomInput} from '../components';
import { useGlobalContext } from '../context';
import styles from '../styles';
import { useNavigate } from 'react-router-dom';


const CreateBattle = () => {

  const {contract , battleName , setBattleName} = useGlobalContext();
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col mb-5'>
         <CustomInput 
        label="Battle"
        placeHolder="Enter Battle Name"
        />
        <CustomButton 

        />
      </div>
    </>
  )
};

export default PageHOC(
  CreateBattle,
  <>Create <br /> a new Battle</>,
  <> Create a battle for you and wait for the others players to join you</>
);