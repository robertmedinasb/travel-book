'use client';

import TourFormStyles from './styles/TourForm.module.scss';
import { useTourForm } from './state/useTourForm';
import { TextField } from './TextField/TextField';
import { FC } from 'react';
import { Tour } from '../List/types/Tour';

interface TourForm {
  setPeopleCount: (peopleCount: number) => void;
  setTours: (tours: Tour[]) => void;
}

export const TourForm: FC<TourForm> = ({ setPeopleCount, setTours }) => {
  const { form, handleSubmit } = useTourForm({ setPeopleCount, setTours });

  return (
    <section className="relative flex justify-center">
      <div className={TourFormStyles.formContainer}>
        <form className={TourFormStyles.form} onSubmit={handleSubmit}>
          <TextField
            form={form}
            fieldName={'name'}
            placeholder="Tour name"
            title="Tour name"
            width="200px"
            required
          />
          <TextField
            form={form}
            fieldName={'startDate'}
            placeholder="MM/DD/YYYY"
            title="Start Date"
            width="100px"
            required
          />
          <TextField
            form={form}
            fieldName={'endDate'}
            placeholder="MM/DD/YYYY"
            title="End Date"
            width="100px"
            required
          />
          <TextField
            form={form}
            fieldName={'adult'}
            placeholder="1"
            title="Adult"
            width="80px"
            required
          />
          <TextField
            form={form}
            fieldName={'children'}
            placeholder="2"
            title="Children"
            width="80px"
            required
          />
          <div>
            <button type="submit" className={TourFormStyles.submitButton}>
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
