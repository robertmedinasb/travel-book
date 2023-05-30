'use client';

import { useLoginForm } from './state/useLoginForm';
import { TextField } from '../TextField/TextField';
import loginFormStyles from './styles/LoginForm.module.scss';
import Link from 'next/link';
import { EMAIL_REGEX } from '@/utils/constants';
import { LoginForm } from './types/LoginForm';

export const LogInForm = () => {
  const { form, handleSubmit, firstError } = useLoginForm();

  return (
    <form className={loginFormStyles.form} onSubmit={handleSubmit}>
      <TextField<LoginForm>
        form={form}
        fieldName="email"
        placeholder="example@email.com"
        title="Email"
        regex={EMAIL_REGEX}
        required
      />
      <TextField<LoginForm>
        form={form}
        fieldName={'password'}
        placeholder="type your password here"
        title="Password"
        type="password"
        required
      />
      <span className={loginFormStyles.errorMessage}>{firstError}</span>
      <button type="submit" className={loginFormStyles.submitButton}>
        Submit
      </button>
      <ul className={loginFormStyles.redirectionLinks}>
        <li className={loginFormStyles.redirectionLink}>
          <p className="text-center">
            New to Travel Book? <Link href={'/sign-up'}>Sign up</Link>
          </p>
        </li>
      </ul>
    </form>
  );
};
