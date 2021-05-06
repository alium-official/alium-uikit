import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { renderToStaticMarkup } from 'react-dom/server'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import Flex from '../../components/Flex/Flex'
import { Modal } from '../Modal'
import DefaultAvatar from '../../components/Svg/Icons/DefaultAvatar'
import InputCopy from '../../components/Svg/Icons/InputCopy'
import MetaMask from '../../components/Svg/Icons/MetaMask'
import { BSCScanIcon, ExitIcon, TransactionHistoryIcon, ModalBackgroundIcon } from '../../components/Svg'
import removeConnectorId from '../../util/connectorId/removeConnectorId'

interface Props {
  account: string
  logout: () => void
  onDismiss?: () => void
  title?: string
  logoutTitle?: string
  explorerName?: string
  explorerLink?: string
  tokenAmount?: string
  tokenSymbol?: string
  networkName?: string
  balance?: string
  onTransactionHistoryHandler?: any
  balanceHook?: any
}

const StyledBackGround = styled.div`
  background-position: center;
  height: 128px;
  width: 694px;
  margin: 0 -25px;
  display: flex;
  align-items: center;
  padding: 24px;
  background-clip: padding-box;
  @media screen and (max-width: 800px) {
    width: auto;
  }
`

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 46px;
  border: 1px solid #d2d6e5;
  box-sizing: border-box;
  border-radius: 6px;
  color: #8990a5;

  overflow: hidden;
  padding-right: 50px;

  :focus {
    border: 1px solid #d2d6e5;
    outline: none;
  }
`

const StyledInputContainer = styled.div`
  margin-top: 24px;
  position: relative;
  > svg:first-child {
    cursor: pointer;
    position: absolute;
    left: 8px;
    top: 10px;
  }
  > svg:last-child {
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 12px;
  }
`

const StyledButton = styled(Button)`
  svg * {
    transition: stroke 200ms ease-in-out;
  }
  :hover {
    svg * {
      stroke: white;
    }
  }
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 800px) {
    flex-direction: column;
    > * {
      width: 100%;
    }
    > *:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`
// <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px">
// {explorerName}
// </LinkExternal>

const svgString = encodeURIComponent(renderToStaticMarkup(<ModalBackgroundIcon />))

const AccountModal: React.FC<Props> = ({
  account,
  logout,
  onDismiss = () => null,
  title = 'Account',
  logoutTitle = 'Disconnect',
  balance,
  explorerName = 'View on BscScan',
  explorerLink,
  tokenSymbol = 'BNB',
  networkName = 'Binance Smart Chain',
  onTransactionHistoryHandler,
  balanceHook,
}) => {
  const [currentBalance, setBalance] = useState(balance)
  // balanceHook().then((result?: any)=>setBalance(result.toSignificant(6)))
  useEffect(() => {
    // balanceHook().then((result)=>setBalance(result))
    balanceHook().then((result?: any) => setBalance(result.toSignificant(6)))
  }, [balanceHook])

  // balanceHook().then((result)=>console.log(result.toSignificant(6)))

  return (
    <Modal title={title} onDismiss={onDismiss} styledModalContent={{ padding: '0 24px 32px 24px' }}>
      <StyledBackGround style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")` }}>
        <StyledInfo>
          <DefaultAvatar width="80px" height="80px" />
          <StyledFlex>
            <Flex flexDirection="column" marginLeft={40}>
              <Text color="#CBC8EE">Balance</Text>
              <Text color="white">
                {!currentBalance ? <p>Loading balance...</p> : `${currentBalance} ${tokenSymbol}`}
                {/* {balance} {tokenSymbol} */}
              </Text>
            </Flex>
            <Flex flexDirection="column" marginLeft={40}>
              <Text color="#CBC8EE">Network</Text>
              <Text color="white">{networkName}</Text>
            </Flex>
          </StyledFlex>
        </StyledInfo>
      </StyledBackGround>
      <StyledInputContainer>
        <MetaMask width="32" height="32" />
        <StyledInput value={account} />
        <InputCopy
          height="24px"
          width="24px"
          onClick={() => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(account)
            }
          }}
        />
      </StyledInputContainer>
      <StyledFlex mt="16px" justifyContent="space-between">
        <StyledButton size="md" variant="secondary" onClick={() => window.open(explorerLink)}>
          <BSCScanIcon mr={16} />
          {explorerName}
        </StyledButton>
        <StyledButton size="md" variant="secondary" onClick={onTransactionHistoryHandler}>
          <TransactionHistoryIcon mr={16} />
          Transaction History
        </StyledButton>
        <StyledButton
          size="md"
          variant="secondary"
          onClick={() => {
            logout()
            removeConnectorId()
            onDismiss()
          }}
        >
          <ExitIcon mr={16} />
          {logoutTitle}
        </StyledButton>
      </StyledFlex>
    </Modal>
  )
}

export default AccountModal
