import { Login } from '../WalletModal/types'

export interface LangType {
  code: string
  language: string
}

export interface Profile {
  username?: string
  image?: string
  profileLink: string
  noProfileLink: string
  showPip?: boolean
}

export interface PushedProps {
  isPushed: boolean
  pushNav: (isPushed: boolean) => void
}

export interface NavTheme {
  background: string
  hover: string
}

export interface MenuSubEntry {
  label: string
  href?: string
  calloutClass?: string
}

export interface MenuEntry {
  label: string
  icon: string
  items?: MenuSubEntry[]
  href?: string
  calloutClass?: string
  initialOpenState?: boolean
}

export interface ModalOptions {
  modalTitle?: string
  modalFooter?: string
  modelCopyAddress?: string
  modelLogout?: string
  modalBscScan?: string
}

export interface PanelProps {
  isDark: boolean
  toggleTheme: (isDark: boolean) => void
  links: Array<MenuEntry>
}

export interface NavProps extends PanelProps {
  account?: string
  login: Login
  loginBlockVisible?: boolean
  logout: () => void
  buttonTitle?: string
  options?: ModalOptions
  balance?: string
  explorerName?: string
  explorerLink?: string
  onTransactionHistoryHandler?: any
  betaText?: string
  betaLink?: string
  balanceHook?: any
}
