// Places shared directly by Arjun. No dates, route, or trip order is implied.
export const homeBase = {
  name: 'Sreekrishnapuram',
  region: 'Kerala, India',
}

export type TravelRegion = 'India' | 'Europe'
export type TravelScene = 'hills' | 'coast' | 'waterfall' | 'city'

export type Destination = {
  id: string
  name: string
  region: TravelRegion
  area: string
  scene: TravelScene
  label: string
  landmarks?: string[]
}

export const destinations: Destination[] = [
  { id: 'paris', name: 'Paris', region: 'Europe', area: 'France', scene: 'city', label: 'CITY & LANDMARKS', landmarks: ['Eiffel Tower', 'Notre-Dame'] },
  { id: 'berlin', name: 'Berlin', region: 'Europe', area: 'Germany', scene: 'city', label: 'CITY SCENES' },
  { id: 'dresden', name: 'Dresden', region: 'Europe', area: 'Germany', scene: 'city', label: 'CITY SCENES' },
  { id: 'kashmir', name: 'Kashmir', region: 'India', area: 'Kashmir', scene: 'hills', label: 'THE MOUNTAINS' },
  { id: 'goa', name: 'Goa', region: 'India', area: 'India', scene: 'coast', label: 'THE COAST' },
  { id: 'hyderabad', name: 'Hyderabad', region: 'India', area: 'Telangana, India', scene: 'city', label: 'CITY SCENES' },
  { id: 'udupi', name: 'Udupi', region: 'India', area: 'Karnataka, India', scene: 'coast', label: 'COAST & ISLAND', landmarks: ['St. Mary’s Island'] },
  { id: 'wayanad', name: 'Wayanad', region: 'India', area: 'Kerala, India', scene: 'hills', label: 'THE HILLS' },
  { id: 'varkala', name: 'Varkala', region: 'India', area: 'Kerala, India', scene: 'coast', label: 'THE COAST' },
  { id: 'athirappilly', name: 'Athirappilly', region: 'India', area: 'Kerala, India', scene: 'waterfall', label: 'THE FALLS' },
  { id: 'bengaluru', name: 'Bengaluru', region: 'India', area: 'Karnataka, India', scene: 'city', label: 'CITY SCENES' },
]
