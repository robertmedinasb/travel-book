import { UseFormReturn } from 'react-hook-form';
import { ITourForm } from '../types/TourForm';
import { FC } from 'react';
import textFieldStyles from './styles/TextField.module.scss';

interface TextFieldProps {
  placeholder: string;
  form: UseFormReturn<ITourForm>;
  type?: 'text' | 'password';
  regex?: RegExp;
  required?: boolean;
  fieldName: keyof ITourForm;
  title: string;
  width?: string;
}

export const TextField: FC<TextFieldProps> = ({
  fieldName,
  form,
  required,
  regex,
  title,
  width,
}) => {
  const {
    formState: { errors },
  } = form;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={fieldName} className={textFieldStyles.title}>
        {title}
      </label>
      <input
        className={`${errors[fieldName]?.ref ? textFieldStyles.error : ''} ${
          textFieldStyles.textField
        }`}
        style={{ width }}
        id={fieldName as string}
        type={'text'}
        {...form.register(fieldName as any, {
          required,
          pattern: regex,
        })}
      />
    </div>
  );
};
