'use client';

import { ToursList } from '../List/ToursList';
import { TourForm } from '../TourForm/TourForm';
import { useToursFinder } from './state/useToursFinder';

export const ToursFinder = () => {
  const { peopleCount, setPeopleCount, tours, setTours } = useToursFinder();

  return (
    <>
      <TourForm setPeopleCount={setPeopleCount} setTours={setTours} />
      <ToursList peopleCount={peopleCount} tours={tours} />
    </>
  );
};
