import { FC } from 'react';
import textFieldStyles from './styles/TextField.module.scss';
import { UseFormReturn } from 'react-hook-form';
import { LoginForm } from '../LogInForm/types/LoginForm';

interface TextFieldProps {
  placeholder: string;
  title: string;
  form: UseFormReturn<LoginForm>;
  fieldName: keyof LoginForm;
}

export const TextField: FC<TextFieldProps> = ({ form, title, fieldName }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={fieldName}>{title}</label>
      <input
        className={textFieldStyles.textField}
        id={fieldName}
        {...form.register(fieldName)}
        type="text"
      />
    </div>
  );
};
