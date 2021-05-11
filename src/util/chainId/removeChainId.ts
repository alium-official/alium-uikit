import Cookies from 'universal-cookie'
import { chainIdCookieKey } from '../../config'
import { getCookieOptions } from '../../config/getCookieOptions'

const cookies = new Cookies()

type removeChainId = () => void

const removeChainId: removeChainId = () => {
  const cookieOptions = getCookieOptions()
  cookies.remove(chainIdCookieKey, cookieOptions)
}

export default removeChainId
