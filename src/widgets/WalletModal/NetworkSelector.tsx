import React from 'react'
import styled from 'styled-components'
import { CheckmarkCircleIcon } from '../../components/Svg'
import Flex from '../../components/Flex/Flex'
import Text from '../../components/Text/Text'
import Button from '../../components/Button/Button'
import { NetworksConfig } from './types'
import switchNetwork from '../../util/switchNetwork'
import { getChainId } from '../../util'

const StyledNetworkSelector = styled(Button)`
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

const StyledCheckMarkInCircle = styled(CheckmarkCircleIcon)`
  position: absolute;
  right: -5px;
  top: -5px;
  width: 16px;
  height: 16px;
`

const StyledFlex = styled(Flex)`
  > button {
    border: 1px solid white !important;
    transition: border 200ms ease-in-out;
  }
  > div {
    transition: color 200ms ease-in-out;
  }
  :hover {
    > button {
      background: #f5f7ff !important;
      border: 1px solid #6c5dd3 !important;
    }

    > div {
      color: #6c5dd3;
    }
  }
`

interface Props {
  selected?: boolean
  title?: string
  setSelectedNetwork: (arg0: string) => void
  networkConfig: NetworksConfig
  chainId: string
}

const NetworkSelector: React.FC<Props> = ({ chainId, selected, networkConfig, setSelectedNetwork }) => {
  const { title, icon: Icon } = networkConfig
  const id = getChainId()
  if (selected && String(id) !== chainId) switchNetwork(chainId, false)

  const handleClick = () => {
    setSelectedNetwork(title)
    switchNetwork(chainId, false)
  }

  return (
    <StyledFlex flexDirection="column" alignItems="center" onClick={handleClick}>
      <StyledNetworkSelector>
        {selected && <StyledCheckMarkInCircle />}
        <Icon />
      </StyledNetworkSelector>
      <Text color="#8990A5" fontSize="11px" mt="8px" style={{ userSelect: 'none' }}>
        {title}
      </Text>
    </StyledFlex>
  )
}

export default NetworkSelector
