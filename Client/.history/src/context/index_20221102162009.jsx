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
import { ABI, ADDRESS } from "../contract";
import { createEventListeners } from "./createEventListeners";
import { info } from "autoprefixer";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState("");
  const [contract, setContract] = useState("");
  const [showAlert, setShowAlert] = useState({
    status: false,
    type: "info",
    message: "",
  });

  const [battleName, setBattleName] = useState("");
  const [gameData, setGameData] = useState({
    players: [],
    pendingBattles: [],
    activeBattle: null,
  });
  const navigate = useNavigate();
  //* Set the wallet Address to the state
  const updateCurrentWalletAddress = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (accounts) setWalletAddress(accounts[0]);
  };

  useEffect(() => {
    updateCurrentWalletAddress();
    window.ethereum.on("accountsChanged", updateCurrentWalletAddress);
  }, []);

  //* Set the smart contract the provider to the state
  useEffect(() => {
    const setSmartContractAndProvider = async () => {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const newProvider = new ethers.providers.Web3Provider(connection);
      const signer = newProvider.getSigner();
      const newContract = new ethers.Contract(ADDRESS, ABI, signer);
      setProvider(newProvider);
      setContract(newContract);
    };
    setSmartContractAndProvider();
  }, []);

  //* showing the alert
  useEffect(() => {
    if (showAlert?.status) {
      const timer = setTimeout(() => {
        setShowAlert({ status: false, type: "info", message: "" });
      }, [5000]);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  //* creating the eventListeners
  useEffect(() => {
    if (contract) {
      createEventListeners({
        navigate,
        contract,
        provider,
        walletAddress,
        setShowAlert,
      });
    }
  }, [contract]);

  //* Set the game data to state
  useEffect(() => {
    const fetchGameData = async () => {
      const fetchedBattles = await contract.getAllBattles();
      const pendingBattles = fetchedBattles.filter(
        (battle) => battle.battleStatus === 0
      );
      let activeBattle = null;
      fetchedBattles.forEach((battle) => {
        if (
          battle.players.find(
            (player) => player.toLowerCase() === walletAddress.toLowerCase()
          )
        ) {
          if (battle.winner.startsWith("0x00")) {
            activeBattle = battle;
          }
        }
      });
      setGameData({ pendingBattles: pendingBattles.slice(1), activeBattle });
    };
    if (contract) fetchGameData();
  }, [contract]);

  return (
    <GlobalContext.Provider
      value={{
        contract,
        walletAddress,
        showAlert,
        setShowAlert,
        battleName,
        setBattleName,
        gameData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
