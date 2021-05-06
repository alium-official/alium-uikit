import Cookies from 'universal-cookie'
import cookieOptions from '../../config/cookieOptions'
import { chainIdCookieKey } from '../../config'

const cookies = new Cookies()

type setChainId = (chainId: string | number) => void

const setChainId: setChainId = (chainId) => {
  cookies.set(chainIdCookieKey, String(chainId), cookieOptions)
}

export default setChainId
