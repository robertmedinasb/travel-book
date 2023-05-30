import { SignUpForm } from '@/components/SignUpForm/SignUpForm';
import { FormViewLayout } from '../layouts/FormView/FormView';

export default function SignUp() {
  return (
    <FormViewLayout
      title="Welcome to TravelBook"
      description="We are glad to have you here! Please fill the form to create your account."
    >
      <SignUpForm />
    </FormViewLayout>
  );
}
