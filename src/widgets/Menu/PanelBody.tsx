import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { SvgProps } from '../../components/Svg'
import * as IconModule from './icons'
import Accordion from './Accordion'
import { MenuEntry, LinkLabel } from './MenuEntry'
import MenuLink from './MenuLink'
import { PanelProps, PushedProps } from './types'
import MenuButton from './MenuButton'
import { HamburgerCloseIcon } from './icons'
import Logo from './Logo'

interface Props extends PanelProps, PushedProps {
  isMobile?: boolean
  togglePush?: () => void
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`

interface StyledIconProps {
  reverse?: boolean
}

const StyledIcon = styled.div`
  {
    height: 24px;
    width: 24px;
    background: linear-gradient(0deg, #ffffff, #ffffff);
    box-shadow: 0px 6px 8px rgba(220, 224, 244, 0.56);
    border-radius: 40px;
    display: flex;
    position: absolute;
    right: -12px;
    top: 36px;
    transition: background-color 200ms ease-in-out;
    border-right: 2px solid rgba(133, 133, 133, 0.1);
  }
  &:hover {
    background: linear-gradient(0deg, #f0f0f0, #f0f0f0);
  }
  > * {
    margin: auto;
    transition: transform 200ms ease-in-out;
    transform: ${(props: StyledIconProps) => (props.reverse ? 'rotate(180deg)' : '')};
  }
`

const StyledLinksPanel = styled.div`
  padding: 18px;
  ${({ theme }) => theme.mediaQueries.nav} {
      padding-top: 33px;
      padding-left: 17px;
      padding-right: 17px;
    }
    @media screen and (max-width: 967px) {
      > div:not(:last-child) {
      border-bottom: 1px solid #F4F5FA;
      }
      > div > a {
        font-weight: 500;
      }
      > div > div:first-child {
        font-weight: 500;
      }
      > div > div:not(:first-child) > div > a {
        color: #8990A5 !important;
        font-weight: 500;
      }
    }
  }
`

const StyledLogoIcon = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.nav} {
    display: block;
  }
`

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, togglePush, isDark }) => {
  const location = useLocation()

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined
  const homeLink = links.find((link) => link.label === 'Home')
  return (
    <Container>
      <StyledLogoIcon>
        <Logo isDark={isDark} href={homeLink?.href ?? '/'} isPushed={isPushed} />
      </StyledLogoIcon>
      <MenuButton aria-label="Toggle menu" onClick={togglePush}>
        {isPushed ? (
          <StyledIcon>
            <HamburgerCloseIcon width="6px" />
          </StyledIcon>
        ) : (
          <StyledIcon reverse>
            <HamburgerCloseIcon width="6px" />
          </StyledIcon>
        )}
      </MenuButton>
      <StyledLinksPanel>
        {links.map((entry) => {
          const Icon = Icons[entry.icon]
          const iconElement = <Icon width="24px" mr="8px" />
          const calloutClass = entry.calloutClass ? entry.calloutClass : undefined

          if (entry.items) {
            const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname)
            const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0

            return (
              <Accordion
                key={entry.label}
                isPushed={isPushed}
                pushNav={pushNav}
                icon={iconElement}
                label={entry.label}
                initialOpenState={initialOpenState}
                className={calloutClass}
              >
                {isPushed &&
                  entry.items.map((item) => (
                    <MenuEntry
                      key={item.href}
                      secondary
                      isActive={item.href === location.pathname}
                      onClick={handleClick}
                    >
                      <MenuLink href={item.href}>{item.label}</MenuLink>
                    </MenuEntry>
                  ))}
              </Accordion>
            )
          }
          return (
            <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
              <MenuLink href={entry.href} onClick={handleClick}>
                {iconElement}
                <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              </MenuLink>
            </MenuEntry>
          )
        })}
      </StyledLinksPanel>
    </Container>
  )
}

export default PanelBody
