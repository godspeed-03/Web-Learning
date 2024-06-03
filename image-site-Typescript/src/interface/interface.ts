import { ReactNode } from "react";

export interface Users {
  page: number;
  per_page: number;
  photos: PhotosEntity;
  total_results: number;
  next_page: string;
}
export interface PhotosEntity {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: Src;
  liked: boolean;
  alt: string;
}
export interface Src {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface QueryState {
  query: string;
  photo: PhotosEntity[];
}

export interface ProviderProps {
  children: ReactNode;
}

export interface AppContextType extends QueryState {
  removepost: (photoid: number) => void;
  searchpost: (searchquery: string) => void;
}

export interface Action {
  type: string;
  payload: any; // Adjust the type as needed
}
