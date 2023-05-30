'use client';

import { FC } from 'react';
import textFieldStyles from './styles/TextField.module.scss';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface TextFieldProps<Form extends FieldValues> {
  placeholder: string;
  title: string;
  form: UseFormReturn<Form>;
  fieldName: keyof Form;
  type?: 'text' | 'password';
  regex?: RegExp;
  required?: boolean;
}

export function TextField<Form extends FieldValues>({
  form,
  title,
  fieldName,
  required,
  type = 'text',
  regex = /\w*/,
}: TextFieldProps<Form>) {
  const {
    formState: { errors },
  } = form;

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold text-sm" htmlFor={fieldName as string}>
        {title}
      </label>
      <input
        className={`${errors[fieldName]?.ref ? textFieldStyles.error : ''} ${
          textFieldStyles.textField
        }`}
        id={fieldName as string}
        type={type}
        {...form.register(fieldName as any, {
          required,
          pattern: regex,
        })}
      />
    </div>
  );
}
