import React, { useState } from 'react'
import styled from 'styled-components'
import { MENU_ENTRY_HEIGHT } from './config'
import { MenuEntry, LinkLabel } from './MenuEntry'
import { PushedProps } from './types'
import { ArrowDropDownIcon, ArrowDropUpIcon } from '../../components/Svg'

interface Props extends PushedProps {
  label: string
  icon: React.ReactElement
  initialOpenState?: boolean
  className?: string
}

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
  div:first-child > div {
    margin-left: 8px;
    padding-bottom: 2px;
    ${({ isOpen }) => isOpen && `color: #24BA7B;`}
  }

  div:first-child > svg * {
    ${({ isOpen }) => isOpen && `stroke: #24BA7B;`}
  }

  @media screen and (max-width: 968px) {
    > div > svg:last-child {
      display: none;
    }
  }

  // @media screen and (min-width: 968px) {
  //   ${({ isOpen }) =>
    isOpen &&
    `
  //   box-shadow: 0px 6px 12px rgba(185, 189, 208, 0.4);
  //   border-radius: 6px;
  // `};
  // }
`

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;

  > div > a {
    padding-left: 25px;
    color: #8990a5;
  }

  @media screen and (max-width: 968px) {
    max-height: ${({ maxHeight }) => `${maxHeight}px`};
  }
`

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState)

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState)
    } else {
      pushNav(true)
      setIsOpen(true)
    }
  }

  return (
    <Container isOpen={isOpen}>
      <MenuEntry onClick={handleClick} className={className}>
        {icon}
        <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  )
}

export default Accordion
