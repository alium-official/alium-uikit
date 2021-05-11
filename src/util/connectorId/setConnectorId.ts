import Cookies from 'universal-cookie'
import { connectorLocalStorageKey } from '../../config'
import { getCookieOptions } from '../../config/getCookieOptions'

const cookies = new Cookies()

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc',
}

type setConnectorId = (connectorId: typeof ConnectorNames[keyof typeof ConnectorNames] | null) => void

const setConnectorId: setConnectorId = (connectorId) => {
  const cookieOptions = getCookieOptions()
  cookies.set(connectorLocalStorageKey, connectorId, cookieOptions)
  window.localStorage.setItem(connectorLocalStorageKey, connectorId as string)
}

export default setConnectorId
