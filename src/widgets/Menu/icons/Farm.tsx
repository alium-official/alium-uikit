import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="5"
        cy="12.6621"
        r="4"
        stroke="#8990A5"
        strokeWidth="1.5"
        fill="none"
        width="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14.6621L15 14.6621"
        stroke="#8990A5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18 12.4196L18 9.56909C15.9439 8.8591 14.4558 8.76303 12 9.56909L12 14"
        stroke="#8990A5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        opacity="0.5"
        d="M15.0004 8.66157L15.0004 4.84082L16.3525 4.84082"
        stroke="#8990A5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        opacity="0.5"
        d="M11.2161 1.9552C10.7505 1.78611 10.3031 1.63776 9.86693 1.51155M3 8.53333L3 1.9552C6.36348 0.794224 7.22924 0.748223 9.86693 1.51155M9.86693 1.51155L12 9"
        stroke="#8990A5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="17"
        cy="14.6621"
        r="2"
        stroke="#8990A5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  )
}

export default Icon
