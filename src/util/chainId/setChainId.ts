import Cookies from 'universal-cookie'
import cookieOptions from '../../config/cookieOptions'

const cookies = new Cookies()

type setChainId = (chainId: string | number) => void

const setChainId: setChainId = (chainId) => {
  cookies.set('chainId', String(chainId), cookieOptions)
}

export default setChainId
