import Cookies from 'universal-cookie'
import { connectorLocalStorageKey } from '../../config'
import { getCookieOptions } from '../../config/getCookieOptions'

const cookies = new Cookies()

type removeConnectorId = () => void

const removeConnectorId: removeConnectorId = () => {
  const cookieOptions = getCookieOptions()
  cookies.remove(connectorLocalStorageKey, cookieOptions)
  window.localStorage.removeItem(connectorLocalStorageKey)
}

export default removeConnectorId
