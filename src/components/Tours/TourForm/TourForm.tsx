'use client';

import TourFormStyles from './styles/TourForm.module.scss';
import { ITourForm } from './types/TourForm';
import { useTourForm } from './state/useTourForm';
import { TextField } from './TextField/TextField';

export const TourForm = () => {
  const { form, handleSubmit } = useTourForm();

  return (
    <section className="relative flex justify-center">
      <div className={TourFormStyles.formContainer}>
        <form className={TourFormStyles.form} onSubmit={handleSubmit}>
          <TextField
            form={form}
            fieldName={'name'}
            placeholder="Tour name"
            required
          />
          <TextField
            form={form}
            fieldName={'startDate'}
            placeholder="Start Date"
            required
          />
          <TextField
            form={form}
            fieldName={'endDate'}
            placeholder="End Date"
            required
          />
          <button type="submit" className={TourFormStyles.submitButton}>
            Found
          </button>
        </form>
      </div>
    </section>
  );
};
