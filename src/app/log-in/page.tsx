import { LogInForm } from '@/components/LogInForm/LogInForm';
import { FormViewLayout } from '../layouts/FormView/FormView';

export default function LogIn() {
  return (
    <FormViewLayout
      title="Are you ready for your next adventure?"
      description="Be part of the biggest travellers community in LATAM"
    >
      <LogInForm />
    </FormViewLayout>
  );
}
