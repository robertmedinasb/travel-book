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
    const resp = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    const response = await resp.json();
    if (!!response.error) {
      form.setError('root', { message: response.error.message });
      return console.error(response.error);
    } else router.push('/tours');
  });

  const firstError = Object.values(form.formState.errors)[0]?.message ?? '';

  return { form, handleSubmit, firstError };
};
