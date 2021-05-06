import Cookies from 'universal-cookie'
import { connectorLocalStorageKey, ConnectorNames } from '../../widgets/WalletModal'
import cookieOptions from '../../config/cookieOptions'

const cookies = new Cookies()

type setConnectorId = (connectorId: typeof ConnectorNames[keyof typeof ConnectorNames] | null) => void

const setConnectorId: setConnectorId = (connectorId) => {
  cookies.set(connectorLocalStorageKey, connectorId, cookieOptions)
  window.localStorage.setItem(connectorLocalStorageKey, connectorId as string)
}

export default setConnectorId
