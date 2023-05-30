import { TourActivity } from './TourActivity';

export interface Tour {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  activities: TourActivity[];
}
