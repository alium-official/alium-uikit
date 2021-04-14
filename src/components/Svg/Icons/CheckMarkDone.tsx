import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 10 10" fill="none" {...props}>
      <path
        d="M7.94895 2.76416L3.89446 6.81865L2.05151 4.9757"
        stroke="#1EA76D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  )
}

export default Icon
