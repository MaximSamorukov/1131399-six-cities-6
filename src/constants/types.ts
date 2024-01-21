import { Amenities, City, Property } from './enums.js';

export type Coordinates = {
  lat: string | number;
  long: string | number;
}

export type Offer = {
  title: string | null;
  description: string | null;
  date: Date | null;
  city: City | string | null;
  previewImg: string | null;
  images: string[] | null;
  premium: boolean | null;
  selected: boolean | null;
  rating: number | null;
  propertyType: Property | null;
  roomsCount: number | null;
  guestsCount: number | null;
  price: number | null;
  amenities: Amenities | null;
  athour: string | null;
  comments: string[] | null;
  coords: Coordinates | null;
}
