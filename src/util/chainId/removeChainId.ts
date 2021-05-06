import Cookies from 'universal-cookie'
import cookieOptions from '../../config/cookieOptions'
import { chainIdCookieKey } from '../../config'

const cookies = new Cookies()

type removeChainId = () => void

const removeChainId: removeChainId = () => {
  cookies.remove(chainIdCookieKey, cookieOptions)
}

export default removeChainId
