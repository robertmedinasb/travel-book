import { FC } from 'react';
import { TourCard } from './TourCard/TourCard';
import { Tour } from './types/Tour';

interface ToursList {
  peopleCount: number;
  tours: Tour[];
}

export const ToursList: FC<ToursList> = ({ peopleCount, tours }) => {
  return (
    <div className="flex flex-wrap justify-center p-5 gap-4 w-fit mt-[8vh]">
      {tours.map((tour) => (
        <TourCard {...tour} peopleCount={peopleCount} />
      ))}
    </div>
  );
};
