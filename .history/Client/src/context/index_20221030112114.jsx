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

const GlobalContext = createElement();

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ demo: "text" }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);