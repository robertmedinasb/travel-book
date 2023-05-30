'use client';

import { useLoginForm } from './state/useLoginForm';
import { TextField } from '../TextField/TextField';
import loginFormStyles from './styles/LoginForm.module.scss';

export const LogInForm = () => {
  const { form, handleSubmit } = useLoginForm();

  return (
    <form className={loginFormStyles.form} onSubmit={handleSubmit}>
      <TextField
        form={form}
        fieldName="email"
        placeholder="example@email.com"
        title="Email"
      />
      <TextField
        form={form}
        fieldName={'password'}
        placeholder="type your password here"
        title="Password"
        type="password"
      />
      <button type="submit" className={loginFormStyles.submitButton}>
        Submit
      </button>
    </form>
  );
};
