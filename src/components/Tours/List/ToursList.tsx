import { TourCard } from './TourCard/TourCard';
import { Tour } from './types/Tour';

const TOURS: Tour[] = [
  {
    activities: [],
    description: 'The best tour in the world',
    duration: '1 day',
    id: 1,
    name: 'The best tour',
    price: 100,
  },
  {
    activities: [],
    description: 'The best tour in the world',
    duration: '1 day',
    id: 1,
    name: 'The best tour',
    price: 100,
  },
  {
    activities: [],
    description: 'The best tour in the world',
    duration: '1 day',
    id: 1,
    name: 'The best tour',
    price: 100,
  },
  {
    activities: [],
    description: 'The best tour in the world',
    duration: '1 day',
    id: 1,
    name: 'The best tour',
    price: 100,
  },
];

export const ToursList = () => {
  return (
    <div className="flex flex-col p-5 gap-4 w-fit mt-[8vh]">
      {TOURS.map((tour) => (
        <TourCard {...tour} />
      ))}
    </div>
  );
};
