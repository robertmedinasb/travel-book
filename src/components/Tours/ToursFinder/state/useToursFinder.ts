import { useReducer, useState } from 'react';
import { Tour } from '../../List/types/Tour';

interface UseToursFinderReducer {
  peopleCount: number;
  tours: Tour[];
}

interface UseToursFinderState extends UseToursFinderReducer {
  setPeopleCount: (peopleCount: number) => void;
  setTours: (tours: Tour[]) => void;
}

export const useToursFinder = (): UseToursFinderState => {
  const [state, dispatch] = useReducer(
    (
      state: UseToursFinderReducer,
      newState: Partial<UseToursFinderReducer>
    ) => {
      return { ...state, ...newState };
    },
    { peopleCount: 0, tours: [] }
  );

  const setPeopleCount = (peopleCount: number) => dispatch({ peopleCount });

  const setTours = (tours: Tour[]) => dispatch({ tours });

  return {
    ...state,
    setPeopleCount,
    setTours,
  };
};
