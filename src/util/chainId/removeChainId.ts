import Cookies from 'universal-cookie'
import cookieOptions from '../../config/cookieOptions'

const cookies = new Cookies()

type removeChainId = () => void

const removeChainId: removeChainId = () => {
  cookies.remove('chainId', cookieOptions)
}

export default removeChainId
