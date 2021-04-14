import React from 'react'
import styled from 'styled-components'
import PanelBody from './PanelBody'
import PanelFooter from './PanelFooter'
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from './config'
import { PanelProps, PushedProps } from './types'

interface Props extends PanelProps, PushedProps {
  showMenu: boolean
  isMobile: boolean
  togglePush?: () => void
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? '2px solid rgba(133, 133, 133, 0.1)' : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? 'initial' : 'initial')};
  transform: translate3d(0, 0, 0);
  z-index: 20;
  top: 97px;
  right: 0;
  width: ${({ isPushed }) => (isPushed ? `315px` : 0)};

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    top: 0;
    left: 0;
    padding-top: 28px;
  }
  @media screen and (max-width: 480px) {
    width: ${({ isPushed }) => `${isPushed ? '100vw' : '0px'}`};
  }
`

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  )
}

export default Panel
