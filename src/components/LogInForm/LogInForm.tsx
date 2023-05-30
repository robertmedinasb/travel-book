'use client';

import { useLoginForm } from './state/useLoginForm';
import { TextField } from '../TextField/TextField';
import loginFormStyles from './styles/LoginForm.module.scss';
import Link from 'next/link';
import { EMAIL_REGEX } from '@/utils/constants';

export const LogInForm = () => {
  const { form, handleSubmit } = useLoginForm();

  return (
    <form className={loginFormStyles.form} onSubmit={handleSubmit}>
      <TextField
        form={form}
        fieldName="email"
        placeholder="example@email.com"
        title="Email"
        regex={EMAIL_REGEX}
        required
      />
      <TextField
        form={form}
        fieldName={'password'}
        placeholder="type your password here"
        title="Password"
        type="password"
        required
      />
      <button type="submit" className={loginFormStyles.submitButton}>
        Submit
      </button>
      <ul className={loginFormStyles.redirectionLinks}>
        <li className={loginFormStyles.redirectionLink}>
          <p className="text-center">
            New to Travel Book? Sign up <Link href={'/sign-up'}>here</Link>
          </p>
        </li>
      </ul>
    </form>
  );
};
