import React from 'react'
import styled from 'styled-components'
import { SvgProps } from '../../components/Svg'
import Flex from '../../components/Flex/Flex'
import Link from '../../components/Link/Link'
import * as IconModule from './icons'
import { socials } from './config'
import { PanelProps, PushedProps } from './types'

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> }

const Container = styled.div<{ isPushed?: boolean }>`
  flex: none;
  padding: 8px 4px;

  @media screen and (max-width: 967px) {
    position: absolute;
    bottom: 90px;
    left: ${({ isPushed }) => (!isPushed ? '100px' : '-10px')};
    width: 70%;
  }
`

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
  @media screen and (max-width: 967px) {
    padding: 0;
  }
`

const StyledExternalLink = styled(Link)`
  margin-bottom: 25px;
  svg * {
    transition: fill 100ms ease-in-out;
  }
  :hover {
    svg * {
      stroke: none !important;
      fill: #6c5dd3;
    }
  }
`

const PanelFooter: React.FC<Props> = ({ isPushed }) => {
  return (
    <Container isPushed={isPushed}>
      <SocialEntry>
        <Flex flexWrap="wrap" justifyContent="space-evenly" style={{ width: '100%' }}>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon]
            const iconProps = { width: '16px', color: 'textSubtle', style: { cursor: 'pointer' } }
            const mr = index < socials.length - 1 ? '24px' : 0
            return (
              <StyledExternalLink external key={social.label} href={social.href} aria-label={social.label}>
                <Icon {...iconProps} />
              </StyledExternalLink>
            )
          })}
        </Flex>
      </SocialEntry>
    </Container>
  )
}

export default PanelFooter
