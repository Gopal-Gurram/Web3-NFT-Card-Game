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

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [walletAddress , setWalletAddress] = useState('');
  const updateCurrentWalletAddress = async () => {
    const account = await window.ethereum.request({method:'eth_requestAccounts'});
    console.log(account);
  }
  useEffect ( () => {
updateCurrentWalletAddress();
  }, [])
  return (
    <GlobalContext.Provider value={{ demo: "text" }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
