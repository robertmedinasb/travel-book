import { UseFormReturn, useForm } from 'react-hook-form';
import { ITourForm } from '../types/TourForm';

interface UseTourFormState {
  form: UseFormReturn<ITourForm>;
  handleSubmit: () => void;
}

export const useTourForm = (): UseTourFormState => {
  const form = useForm<ITourForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log({ data });
  });

  return { form, handleSubmit };
};
