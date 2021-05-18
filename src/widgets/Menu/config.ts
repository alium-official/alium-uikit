import { externalLinks } from '../../config'

export const links = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.alium.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.alium.finance/#/pool',
      },
    ],
  },
  {
    label: 'Private Round NFTs',
    icon: 'PrivateRoundIcon',
    href: '/account',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Github',
        href: externalLinks.github,
      },
      {
        label: 'Docs',
        href: 'https://docs.alium.finance',
      },
      {
        label: 'Blog',
        href: externalLinks.medium,
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: externalLinks.github,
      },
      {
        label: 'Docs',
        href: 'https://docs.alium.finance',
      },
      {
        label: 'Blog',
        href: externalLinks.medium,
      },
    ],
  },
]

export const socials = [
  {
    label: 'GitHub',
    icon: 'GitHubIcon',
    href: externalLinks.github,
  },
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: externalLinks.telegram,
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: externalLinks.twitter,
  },
  {
    label: 'Medium',
    icon: 'MediumIcon',
    href: externalLinks.medium,
  },
  {
    label: 'CoinGecko',
    icon: 'CoinGeckoIcon',
    href: externalLinks.coingecko,
  },
]

export const MENU_HEIGHT = 97
export const MENU_ENTRY_HEIGHT = 53
export const SIDEBAR_WIDTH_FULL = 256
export const SIDEBAR_WIDTH_REDUCED = 88
