import Cookies from 'universal-cookie'
import setChainId from './setChainId'
import { chainIdCookieKey, chainIdLocationKey } from '../../config'

const cookies = new Cookies()

type getChainId = () => number

const getChainId: getChainId = () => {
  // get chainId from location
  const params = new URLSearchParams(window.location.search)
  const locationChainId = params.get(chainIdLocationKey)
  if (locationChainId) {
    setChainId(locationChainId)
    return parseInt(locationChainId, 10)
  }

  // get chainId from cookie
  const cookieChainId = cookies.get(chainIdCookieKey)
  if (cookieChainId) {
    return parseInt(cookieChainId, 10)
  }

  // get chainId from env
  const envChainId = process.env.REACT_APP_CHAIN_ID as string
  setChainId(envChainId)
  return parseInt(envChainId, 10)
}

export default getChainId
