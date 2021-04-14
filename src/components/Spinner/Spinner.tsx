import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import { SpinnerProps } from './types'

const Container = styled.div`
  position: relative;
`

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <Loader width={`${size * 0.5}px`} type="TailSpin" color="#6C5DD3" />
    </Container>
  )
}

export default Spinner
