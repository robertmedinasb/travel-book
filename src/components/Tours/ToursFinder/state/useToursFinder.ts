import { useEffect, useReducer, useState } from 'react';
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

  const fetchTours = async () => {
    const resp = await fetch('/api/tours');
    const data = await resp.json();
    setTours(data.tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return {
    ...state,
    setPeopleCount,
    setTours,
  };
};
