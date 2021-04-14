import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import { useWalletModal } from '../WalletModal'
import { Login } from '../WalletModal/types'
import { AddIcon } from '../../components/Svg'
import NetworkSwitch from './NetworkSwitch'
import Flex from "../../components/Flex/Flex";

interface Props {
  account?: string
  login: Login
  logout: () => void
  buttonTitle?: string
  modalTitle?: string
  modelLogout?: string
  balance?: string
  explorerName?: string
  explorerLink?: string
  onTransactionHistoryHandler?: any;
  balanceHook?: any;
}

const StyledConnectButton = styled.div`
  margin-right: 10px;
`

const StyledAddIcon = styled.div`
  border: 1.5px solid #ffffff;
  display: flex;
  border-radius: 6px;
  margin-right: 17px;
  * {
    margin: auto;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`

const StyledButtonTitle = styled.div`
  font-size: 14px;
`

const UserBlock: React.FC<Props> = (props) => {
  const { account, login, logout, buttonTitle, modalTitle, modelLogout, balance, explorerName, explorerLink, onTransactionHistoryHandler, balanceHook } = props
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account,
    modalTitle,
    modelLogout,
    balance,
    explorerName,
    explorerLink,
    onTransactionHistoryHandler,
    balanceHook
  )
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  return (
    <Flex alignItems="center">
      <NetworkSwitch />
      {account ? (
        <Button
          size="md"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal()
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <StyledConnectButton>
          <Button
            size="md"
            onClick={() => {
              onPresentConnectModal()
            }}
          >
            <StyledAddIcon>
              <AddIcon color="#fff" />
            </StyledAddIcon>
            <StyledButtonTitle>{buttonTitle}</StyledButtonTitle>
          </Button>
        </StyledConnectButton>
      )}
    </Flex>
  )
}

export default UserBlock
