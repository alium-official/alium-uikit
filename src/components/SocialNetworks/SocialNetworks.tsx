import React from 'react'
import styled from 'styled-components'

import { GithubIcon, TelegramIcon, TwitterIcon, MediumIcon } from './social-icons'

const StyledWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }
`

const LinkItem = styled.a`
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  padding: 0 4px;
`

const SocialNetworks = () => {
  return (
    <StyledWrapper>
      <LinkItem href="https://github.com/alium-official" target="_blank" rel="noopener  noreferrer">
        <GithubIcon />
      </LinkItem>
      <LinkItem href="https://t.me/aliumswap_official" target="_blank" rel="noopener  noreferrer">
        <TelegramIcon />
      </LinkItem>
      <LinkItem href="https://twitter.com/AliumSwap" target="_blank" rel="noopener  noreferrer">
        <TwitterIcon />
      </LinkItem>
      <LinkItem href="https://medium.com/@aliumswap" target="_blank" rel="noopener  noreferrer">
        <MediumIcon />
      </LinkItem>
    </StyledWrapper>
  )
}

export default SocialNetworks
