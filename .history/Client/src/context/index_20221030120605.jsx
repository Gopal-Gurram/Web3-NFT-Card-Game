import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useNavigate } from "react-router-dom";
import {ADDRESS , ABI} from '../contracts'
const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [provider, setProvider] = useState('');
  const [contract, setContract] = useState('');

  const updateCurrentWalletAddress = async () => {
    const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(account);
  }

  useEffect(() => {
    updateCurrentWalletAddress();
  }, []);

  useEffect( () => {
    const setSmartContractAndProvider = async() => {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const newProvider = new ethers.providers.Web3Provider(connection);
      const signer = newProvider.signer();
      const newContract = new ethers.Contract(ADDRESS,ABI,signer);
      setProvider(newProvider);
      setContract(newContract);
    }
  })
  
  return (
    <GlobalContext.Provider value={{ demo: "text" }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
