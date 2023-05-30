import { UseFormReturn, useForm } from 'react-hook-form';
import { LoginForm } from '../types/LoginForm';
import { useRouter } from 'next/navigation';

interface UseLoginFormState {
  form: UseFormReturn<LoginForm>;
  handleSubmit: () => void;
}

export const useLoginForm = (): UseLoginFormState => {
  const router = useRouter();

  const form = useForm<LoginForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    router.push('/sign-up');
  });

  return { form, handleSubmit };
};
