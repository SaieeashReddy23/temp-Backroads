import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const PageLinks = [
  { id: 1, href: '#home', page: 'home' },
  { id: 2, href: '#about', page: 'about' },
  { id: 3, href: '#services', page: 'services' },
  { id: 4, href: '#tours', page: 'tours' },
]

export const SocLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'twitter' },
  { id: 2, href: 'https://www.twitter.com', icon: 'facebook' },
  { id: 3, href: 'https://www.twitter.com', icon: 'squarespace' },
]

export const ServicesData = [
  {
    id: 1,
    icon: 'wallet',
    title: 'saving money',
    text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'tree',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'socks',
    title: 'amazing comfort',
    text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
]

export const toursData = [
  {
    id: 1,
    img: tour1,
    tourDate: 'august 26th, 2020',
    tourTitle: 'Tibet Adventure',
    tourCountry: 'china',
    days: 6,
    cost: '$2100',
  },
  {
    id: 2,
    img: tour2,
    tourDate: 'october 1th, 2020',
    tourTitle: 'best of java',
    tourCountry: 'indonesia',
    days: 11,
    cost: '$1400',
  },
  {
    id: 3,
    img: tour3,
    tourDate: 'september 15th, 2020',
    tourTitle: 'explore hong kong',
    tourCountry: 'hong kong',
    days: 8,
    cost: '$5000',
  },
  {
    id: 4,
    img: tour4,
    tourDate: 'december 5th, 2019',
    tourTitle: 'kenya highlights',
    tourCountry: 'Kenya',
    days: 20,
    cost: '$3300',
  },
]
