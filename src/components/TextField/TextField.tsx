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
  regex?: RegExp;
  required?: boolean;
}

export const TextField: FC<TextFieldProps> = ({
  form,
  title,
  fieldName,
  required,
  type = 'text',
  regex = /\w*/,
}) => {
  const {
    formState: { errors },
  } = form;

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold text-sm" htmlFor={fieldName}>
        {title}
      </label>
      <input
        className={`${errors[fieldName]?.ref ? textFieldStyles.error : ''} ${
          textFieldStyles.textField
        }`}
        id={fieldName}
        type={type}
        {...form.register(fieldName, {
          required,
          pattern: regex,
        })}
      />
    </div>
  );
};
