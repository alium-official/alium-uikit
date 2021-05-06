import Cookies from 'universal-cookie'
import { connectorLocalStorageKey } from '../../widgets/WalletModal'
import cookieOptions from '../../config/cookieOptions'

const cookies = new Cookies()

type removeConnectorId = () => void

const removeConnectorId: removeConnectorId = () => {
  cookies.remove(connectorLocalStorageKey, cookieOptions)
  window.localStorage.removeItem(connectorLocalStorageKey)
}

export default removeConnectorId
