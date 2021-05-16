import React from 'react'
import styled from 'styled-components'

import { GithubIcon, TelegramIcon, TwitterIcon, MediumIcon } from './social-icons'
import { externalLinks } from '../../config'

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

const links = [
  { href: externalLinks.github, Icon: GithubIcon },
  { href: externalLinks.telegram, Icon: TelegramIcon },
  { href: externalLinks.twitter, Icon: TwitterIcon },
  { href: externalLinks.medium, Icon: MediumIcon },
]

const SocialNetworks = () => {
  return (
    <StyledWrapper>
      {links.map(({ href, Icon }) => (
        <LinkItem href={href} target="_blank" rel="noopener  noreferrer" key={href}>
          <Icon />
        </LinkItem>
      ))}
    </StyledWrapper>
  )
}

export default SocialNetworks
