import { UseFormReturn, useForm } from 'react-hook-form';
import { LoginForm } from '../types/LoginForm';
import { useRouter } from 'next/navigation';

interface UseLoginFormState {
  form: UseFormReturn<LoginForm>;
  handleSubmit: () => void;
  firstError: string;
}

export const useLoginForm = (): UseLoginFormState => {
  const router = useRouter();

  const form = useForm<LoginForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    router.push('/tours');
  });

  const firstError = Object.values(form.formState.errors)[0]?.message ?? '';

  return { form, handleSubmit, firstError };
};
