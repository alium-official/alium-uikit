import styled, { keyframes, DefaultTheme } from 'styled-components'
import { MENU_ENTRY_HEIGHT } from './config'

export interface Props {
  secondary?: boolean
  isActive?: boolean
  theme: DefaultTheme
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : 'transparent !important')};
  transition: color 0.4s;
  flex-grow: 1;
  font-size: 14px;
`

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? '0 32px' : '0 16px')};
  font-size: ${({ secondary }) => (secondary ? '14px' : '16px')};

  color: ${({ theme, isActive }) => (isActive ? '#24BA7B' : theme.colors.textSubtle)};
  ${({ isActive }) =>
    isActive &&
    `
    // box-shadow: 0px 6px 12px rgba(185, 189, 208, 0.4);
    // border-radius: 6px;
    `}
  transition: color 200ms ease-in-out;

  a {
    color: ${({ theme, isActive }) => (isActive ? '#24BA7B' : theme.colors.textSubtle)} !important;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  a > div {
    margin-left: 8px;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  svg * {
    transition: stroke 200ms ease-in-out;
  }

  &:hover div {
    color: #24ba7b;
  }

  & a {
    transition: color 200ms ease-in-out;
  }

  &:hover a {
    color: #24ba7b !important;
  }

  &:hover svg:not(:last-child) * {
    stroke: #24ba7b;
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: 'button',
}

export { MenuEntry, LinkLabel }
