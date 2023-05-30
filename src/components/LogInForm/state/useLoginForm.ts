import { UseFormReturn, useForm } from 'react-hook-form';
import { LoginForm } from '../types/LoginForm';

interface UseLoginFormState {
  form: UseFormReturn<LoginForm>;
  handleSubmit: () => void;
}

export const useLoginForm = (): UseLoginFormState => {
  const form = useForm<LoginForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log({ data });
  });

  return { form, handleSubmit };
};
