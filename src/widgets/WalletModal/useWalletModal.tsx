import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string, title?: string, footer?: string, copyAddress?: string, logoutTitle?: string, bscScan?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} title={title} footer={footer}/>);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} title={title} copyAddress={copyAddress} logoutTitle={logoutTitle} bscScan={bscScan}/>);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
