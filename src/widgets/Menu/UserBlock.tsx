import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import { AddIcon } from "../../components/Svg";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  buttonTitle?: string;
  modalTitle?: string;
  modalFooter?: string;
  modelCopyAddress?: string;
  modelLogout?: string;
  modalBscScan?: string;
}

const StyledConnectButton = styled.div`
  margin-right: 10px;
`

const StyledAddIcon = styled.div`
  border: 1.5px solid #FFFFFF;
  display: flex;
  border-radius: 6px;
  margin-right: 17px;
  * {
    margin: auto;
  }
  @media screen and (max-width: 480px){
    display: none;
  }
`

const StyledButtonTitle = styled.div`
  font-size: 14px
`

const UserBlock: React.FC<Props> = ({ account, login, logout, buttonTitle, modalTitle, modalFooter, modelCopyAddress, modelLogout, modalBscScan }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, modalTitle, modalFooter, modelCopyAddress, modelLogout, modalBscScan);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          size="md"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <StyledConnectButton>
          <Button
            size="md"
            onClick={() => {
              onPresentConnectModal();
            }}
          >
            <StyledAddIcon>
              <AddIcon color="#fff" />
            </StyledAddIcon>
            <StyledButtonTitle>
              {buttonTitle}
            </StyledButtonTitle>
          </Button>
        </StyledConnectButton>
      )}
    </div>
  );
};

export default UserBlock;
