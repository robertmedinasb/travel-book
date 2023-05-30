import { LogInForm } from '@/components/LogInForm/LogInForm';
import { FormViewLayout } from '../layouts/FormView/FormView';

export default function LogIn() {
  return (
    <FormViewLayout
      title="¿Listo para seguir descubriendo el mundo juntos?"
      description="Sé parte de la comunidad de viajeros más grande de Latinoamérica."
    >
      <LogInForm />
    </FormViewLayout>
  );
}
