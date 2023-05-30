import { FC } from 'react';
import textFieldStyles from './styles/TextField.module.scss';

interface TextFieldProps {
  placeholder: string;
  id: string;
  title: string;
}

export const TextField: FC<Partial<TextFieldProps>> = (props) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={props.id}>{props.title}</label>
      <input {...props} className={textFieldStyles.textField} type="text" />
    </div>
  );
};
