'use client';

import { FC } from 'react';
import { useSignUpForm } from './state/useSignUpForm';
import { TextField } from '../TextField/TextField';
import { EMAIL_REGEX, NAME_REGEX } from '@/utils/constants';
import { SignupForm } from './types/SignUpForm';
import signUpFormStyles from './styles/SignUpForm.module.scss';
import Link from 'next/link';

interface SignUpFormProps {}

export const SignUpForm: FC<SignUpFormProps> = () => {
  const { form, handleSubmit, firstError } = useSignUpForm();

  return (
    <form className={signUpFormStyles.form} onSubmit={handleSubmit}>
      <TextField<SignupForm>
        form={form}
        fieldName="firstName"
        placeholder="First name"
        title="First Name"
        regex={NAME_REGEX}
        required
      />
      <TextField<SignupForm>
        form={form}
        fieldName="lastName"
        placeholder="Last name"
        title="Last Name"
        regex={NAME_REGEX}
        required
      />
      <TextField<SignupForm>
        form={form}
        fieldName="email"
        placeholder="example@email.com"
        title="Email"
        regex={EMAIL_REGEX}
        required
      />
      <TextField<SignupForm>
        form={form}
        fieldName={'password'}
        placeholder="type your password here"
        title="Password"
        type="password"
        required
      />
      <TextField<SignupForm>
        form={form}
        fieldName={'confirmPassword'}
        placeholder="confirm the password"
        title="Confirm Password"
        type="password"
        required
      />
      <span className={signUpFormStyles.errorMessage}>{firstError}</span>
      <button type="submit" className={signUpFormStyles.submitButton}>
        Submit
      </button>
      <ul className={signUpFormStyles.redirectionLinks}>
        <li className={signUpFormStyles.redirectionLink}>
          <p className="text-center">
            Already have an account? <Link href={'/log-in'}>Log in</Link>
          </p>
        </li>
      </ul>
    </form>
  );
};
