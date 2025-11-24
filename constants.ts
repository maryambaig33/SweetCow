import { Flavor, ShopLocation, NavItem } from './types';

export const STAPLE_FLAVORS: Flavor[] = [
  {
    id: '1',
    name: 'Super Delicious Vanilla',
    description: 'Our classic vanilla bean ice cream made with the finest Madagascar bourbon vanilla.',
    imageUrl: 'https://picsum.photos/400/300?grayscale', // Placeholder
    category: 'Staple',
    isGlutenFree: true,
    containsNuts: false,
  },
  {
    id: '2',
    name: 'Dutch Chocolate',
    description: 'Rich, dark, and creamy chocolate ice cream made with premium Dutch cocoa.',
    imageUrl: 'https://picsum.photos/400/301?grayscale',
    category: 'Staple',
    isGlutenFree: true,
    containsNuts: false,
  },
  {
    id: '3',
    name: 'Cookies and Cream',
    description: 'Sweet cream ice cream loaded with crushed Oreo cookies.',
    imageUrl: 'https://picsum.photos/400/302?grayscale',
    category: 'Staple',
    isGlutenFree: false,
    containsNuts: false,
  },
  {
    id: '4',
    name: 'Strawberry Fields',
    description: 'Fresh strawberry ice cream made with real, ripe strawberries.',
    imageUrl: 'https://picsum.photos/400/303?grayscale',
    category: 'Staple',
    isGlutenFree: true,
    containsNuts: false,
  },
  {
    id: '5',
    name: 'Mint Chocolate Chip',
    description: 'Cool peppermint ice cream with dark chocolate shavings.',
    imageUrl: 'https://picsum.photos/400/304?grayscale',
    category: 'Staple',
    isGlutenFree: true,
    containsNuts: false,
  },
  {
    id: '6',
    name: 'Salted Caramel',
    description: 'Sweet and salty caramel ice cream with a house-made caramel ribbon.',
    imageUrl: 'https://picsum.photos/400/305?grayscale',
    category: 'Staple',
    isGlutenFree: true,
    containsNuts: false,
  }
];

export const LOCATIONS: ShopLocation[] = [
  {
    id: 'l1',
    name: 'Highlands Square',
    address: '3475 W 32nd Ave, Denver, CO 80211',
    phone: '(303) 477-3269',
    hours: 'Sun-Thu 10am-10pm, Fri-Sat 10am-11pm',
    lat: 39.762,
    lng: -105.035
  },
  {
    id: 'l2',
    name: 'South Boulder',
    address: '637 Front St, Louisville, CO 80027',
    phone: '(303) 666-4269',
    hours: 'Sun-Thu 11am-9:30pm, Fri-Sat 11am-10pm',
    lat: 39.977,
    lng: -105.131
  },
  {
    id: 'l3',
    name: 'Stanley Marketplace',
    address: '2501 Dallas St, Aurora, CO 80010',
    phone: '(303) 484-1596',
    hours: 'Daily 11am-9pm',
    lat: 39.753,
    lng: -104.877
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Flavors', id: 'flavors' },
  { label: 'Locations', id: 'locations' },
  { label: 'Dream Lab', id: 'lab' },
];
