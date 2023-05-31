import { TextField } from '@/components/TextField/TextField';
import TourFormStyles from './styles/TourForm.module.scss';
import { ITourForm } from './types/TourForm';
import { useTourForm } from './state/useTourForm';

export const TourForm = () => {
  const { form, handleSubmit } = useTourForm();

  return (
    <section className="relative flex justify-center">
      <div className={TourFormStyles.formContainer}>
        <form className="flex" onSubmit={handleSubmit}>
          <TextField<ITourForm>
            form={form}
            fieldName={'name'}
            placeholder="Tour name"
            title="Tour name"
            required
          />
        </form>
      </div>
    </section>
  );
};
