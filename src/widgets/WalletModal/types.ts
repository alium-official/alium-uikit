import { FC } from 'react'
import { SvgProps } from '../../components/Svg/types'

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc',
}

export type Login = (connectorId: ConnectorNames) => void

export interface WalletsConfig {
  title: string
  icon: FC<SvgProps>
  connectorId: ConnectorNames
}

export interface NetworksConfig {
  title: string
  label: string
  chainId: any
  icon: FC<SvgProps>
}
