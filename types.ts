export interface Flavor {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'Staple' | 'Rotating' | 'Vegan' | 'Seasonal';
  isGlutenFree: boolean;
  containsNuts: boolean;
}

export interface ShopLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface AiFlavorResponse {
  flavorName: string;
  description: string;
  ingredients: string[];
  colorHex: string;
}
