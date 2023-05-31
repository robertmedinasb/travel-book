import { UseFormReturn, useForm } from 'react-hook-form';
import { ITourForm } from '../types/TourForm';
import { Tour } from '../../List/types/Tour';

interface UseTourFormState {
  form: UseFormReturn<ITourForm>;
  handleSubmit: () => void;
}

interface TourFormStateProps {
  setPeopleCount: (peopleCount: number) => void;
  setTours: (tours: Tour[]) => void;
}

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

export const useTourForm = ({
  setPeopleCount,
  setTours,
}: TourFormStateProps): UseTourFormState => {
  const form = useForm<ITourForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      adult: 0,
      children: 0,
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log({ data });
    setPeopleCount(data.adult + data.children);
    setTours(TOURS);
  });

  return { form, handleSubmit };
};
