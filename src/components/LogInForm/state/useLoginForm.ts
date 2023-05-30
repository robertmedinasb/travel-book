import { useState } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
}

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
