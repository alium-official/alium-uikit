import React, { useState } from 'react'
import styled from 'styled-components'
import { NetworksConfig } from '../WalletModal/types'
import { networks } from '../WalletModal/config'
import { ArrowDropDownIcon, ArrowDropUpIcon } from '../../components/Svg'
import switchNetwork from '../../util/switchNetwork'

const StyledDropDown = styled.div`
  width: 232px;
  border: 1px solid #6c5dd3;
  box-sizing: border-box;
  border-radius: 6px;
  height: 48px;
  position: relative;
  cursor: pointer;
  margin-right: 24px;
   transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  > svg * { 
    transition: stroke 200ms ease-in-out;
  }
  :hover {
    background-color: #6C5DD3;
    > * {
      color: white;
    }
    > svg * {
      stroke: white;
    }
  }
  
  > svg {
    fill: #6c5dd3;
    position: absolute;
    right: 23px;
    top: 18px;
  }
`

const StyledSelectedOption = styled.p`
  position: absolute;
  padding-left: 47px;
  margin-top: 15px;
  letter-spacing: 0.3px;
  color: #6C5DD3;
  font-size: 14px;
`

const StyledOptionsContainer = styled.div`
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  margin-top: 48px;
  background: white;
  padding: 2px;
  box-shadow: 0px 6px 12px rgba(185, 189, 208, 0.4);
  border-radius: 6px;
  @media screen and (max-width: 790px) {
    position: fixed;
    width: calc(100vw - 54px);
  }
`

const StyledOption = styled.div`
  padding: 12px;
  text-align: left;
  color: #8990a5;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  cursor: pointer;
  border-radius: 6px;
  :hover {
    background-color: #f5f7ff;
    color: #0b1359;
  }
`

const StyledIconContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 14px;
`

const NetworkSwitch: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false)
  const params = new URLSearchParams(window.location.search)
  const id = params.get('network')
  const [selectedOption, setSelectedOption] = useState(id === '256' ? networks[1].label : networks[0].label)

  const handleClick = (item: NetworksConfig) => {
    setSelectedOption(item.label)
    switchNetwork(item.chainId, true)
  }

  const { icon: Icon } = networks[networks.findIndex(network=>network.label === selectedOption)]

  return (
    <StyledDropDown onClick={() => setShowOptions(!showOptions)}>
      <StyledIconContainer>
        <Icon />
      </StyledIconContainer>
      <StyledSelectedOption>{selectedOption}</StyledSelectedOption>
      {!showOptions ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      {showOptions && (
        <StyledOptionsContainer>
          {networks.map((item) => (
            <StyledOption key={item.title} onClick={() => handleClick(item)}>
              {item.label}
            </StyledOption>
          ))}
        </StyledOptionsContainer>
      )}
    </StyledDropDown>
  )
}

export default NetworkSwitch
