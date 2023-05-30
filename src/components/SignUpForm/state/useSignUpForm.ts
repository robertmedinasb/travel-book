import { UseFormReturn, useForm } from 'react-hook-form';
import { SignupForm } from '../types/SignUpForm';
import { useRouter } from 'next/navigation';

interface UseSignUpFormState {
  form: UseFormReturn<SignupForm>;
  handleSubmit: () => void;
  firstError: string;
}

export const useSignUpForm = (): UseSignUpFormState => {
  const router = useRouter();

  const form = useForm<SignupForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSubmit = form.handleSubmit((data) => {
    if (data.password !== data.confirmPassword) {
      form.setError('password', {
        type: 'validate',
        message: 'Passwords do not match',
      });

      return form.setError('confirmPassword', {
        type: 'validate',
        message: 'Passwords do not match',
      });
    }
    router.push('/tours');
  });

  const firstError = Object.values(form.formState.errors)[0]?.message ?? '';

  return {
    form,
    handleSubmit,
    firstError,
  };
};
