'use client';

import { FC } from 'react';
import textFieldStyles from './styles/TextField.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { LoginForm } from '../LogInForm/types/LoginForm';

interface TextFieldProps {
  placeholder: string;
  title: string;
  form: UseFormReturn<LoginForm>;
  fieldName: keyof LoginForm;
  type?: 'text' | 'password';
}

export const TextField: FC<TextFieldProps> = ({
  form,
  title,
  fieldName,
  type = 'text',
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold text-sm" htmlFor={fieldName}>
        {title}
      </label>
      <input
        className={textFieldStyles.textField}
        id={fieldName}
        type={type}
        {...form.register(fieldName)}
      />
    </div>
  );
};
