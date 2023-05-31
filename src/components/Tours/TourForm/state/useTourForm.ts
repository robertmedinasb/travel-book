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
    const resp = await fetch(`/api/tours/${data.name}`);
    const json = await resp.json();
    setPeopleCount(Number(data.adult) + Number(data.children));
    setTours(json.tours);
  });

  return { form, handleSubmit };
};
