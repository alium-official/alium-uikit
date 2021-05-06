import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import { Login, WalletsConfig } from './types'
import Flex from '../../components/Flex/Flex'
import { CheckmarkCircleIcon } from '../../components/Svg'
import setConnectorId from '../../util/connectorId/setConnectorId'

interface Props {
  walletConfig: WalletsConfig
  login: Login
  onDismiss: () => void
  selected?: boolean
  setSelectedWallet: (arg0: string) => void
  selectedNetwork: string
}

const StyledButton = styled(Button)`
  position: relative;
  width: 48px;
  height: 48px;
  background: #f5f7ff;
  border-radius: 6px;
  display: flex;
  padding: 0;

  > * {
    margin: auto;
  }
`

const StyledFlex = styled(Flex)<{ isBlurred?: boolean }>`
  > button {
    border: 1px solid white !important;
    ${({ isBlurred }) => (isBlurred ? 'opacity: 0.5;' : '')}
    transition: border 200ms ease-in-out;
  }
  > div {
    ${({ isBlurred }) => (isBlurred ? 'opacity: 0.5;' : '')}
    transition: color 200ms ease-in-out;
  }
  ${({ isBlurred }) =>
    isBlurred
      ? `
    > button {
        background: #f5f7ff !important;
    }
  `
      : `:hover {
      > button {
        background: #f5f7ff !important;
        border: 1px solid #6c5dd3 !important;
      }
  
      > div {
        color: #6c5dd3;
      }
    }`}
`

const StyledCheckMarkInCircle = styled(CheckmarkCircleIcon)`
  position: absolute;
  right: -5px;
  top: -5px;
  width: 16px;
  height: 16px;
`

const WalletCard: React.FC<Props> = ({
  login,
  walletConfig,
  onDismiss,
  selected,
  setSelectedWallet,
  selectedNetwork,
}) => {
  const { title, icon: Icon } = walletConfig

  const onClickHandler = () => {
    login(walletConfig.connectorId)
    setConnectorId(walletConfig.connectorId)
    setSelectedWallet(title)
    onDismiss()
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  return (
    <StyledFlex
      flexDirection="column"
      alignItems="center"
      onClick={title !== 'Metamask' && selectedNetwork === 'Huobi' ? undefined : onClickHandler}
      isBlurred={title !== 'Metamask' && selectedNetwork === 'Huobi'}
    >
      <StyledButton
        fullwidth
        variant="tertiary"
        style={{ justifyContent: 'space-between' }}
        id={`wallet-connect-${title.toLocaleLowerCase()}`}
      >
        <Icon width="32px" />
        {selected && <StyledCheckMarkInCircle />}
      </StyledButton>
      <Text color="#8990A5" fontSize="11px" mt="8px" style={{ textAlign: 'center' }}>
        {title}
      </Text>
    </StyledFlex>
  )
}

export default WalletCard
