const switchNetwork = (value: string, withReload: boolean): void => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set('network', value)
  const newurl = `${window.location.protocol}//${window.location.host}${
    window.location.pathname
  }?${searchParams.toString()}`
  window.history.pushState({ path: newurl }, '', newurl)
  if (withReload) window.location.reload()
}

export default switchNetwork
