'use client';

import { useLoginForm } from './state/useLoginForm';
import { TextField } from '../TextField/TextField';
import loginFormStyles from './styles/LoginForm.module.scss';

export const LogInForm = () => {
  const { form, handleSubmit } = useLoginForm();

  return (
    <form className={loginFormStyles.form} onSubmit={handleSubmit}>
      <TextField id="email" placeholder="example@email.com" title="Email" />
      <TextField
        id="password"
        placeholder="type your password here"
        title="Password"
      />
      <button type="submit" className={loginFormStyles.submitButton}>
        Submit
      </button>
    </form>
  );
};
