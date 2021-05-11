import Cookies from 'universal-cookie'
import { chainIdCookieKey } from '../../config'
import { getCookieOptions } from '../../config/getCookieOptions'

const cookies = new Cookies()

type setChainId = (chainId: string | number) => void

const setChainId: setChainId = (chainId) => {
  const cookieOptions = getCookieOptions()
  cookies.set(chainIdCookieKey, String(chainId), cookieOptions)
}

export default setChainId
