import { FC, PropsWithChildren } from 'react';
import FormViewStyles from './styles/FormView.module.scss';

interface FormViewLayoutProps {
  title: string;
  description: string;
}

export const FormViewLayout: FC<PropsWithChildren<FormViewLayoutProps>> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className={FormViewStyles.container}>
      <div className="sm:h-full flex flex-col align-center sm:justify-center">
        <div className="text-center">
          <h1 className={FormViewStyles.title}>{title}</h1>
          <br />
          <p className={FormViewStyles.description}>{description}</p>
        </div>
      </div>
      <div className="sm:h-full flex flex-col align-center sm:justify-center">
        {children}
      </div>
    </div>
  );
};
