import Cookies from 'universal-cookie'
import setConnectorId from './setConnectorId'
import { connectorLocalStorageKey } from '../../config'
import { ConnectorNames } from '../../widgets/WalletModal'

const cookies = new Cookies()

type getConnectorId = () => typeof ConnectorNames[keyof typeof ConnectorNames] | null

const getConnectorId: getConnectorId = () => {
  // get connectorId from cookie
  const cookieConnectorId = cookies.get(connectorLocalStorageKey) as ConnectorNames
  if (cookieConnectorId) {
    return cookieConnectorId
  }

  // get connectorId from localStorage
  const storageConnectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames
  if (storageConnectorId) {
    setConnectorId(storageConnectorId)
    return storageConnectorId
  }

  return null
}

export default getConnectorId
