import { TourHeader } from '@/components/Tours/Header/TourHeader';
import { ToursList } from '@/components/Tours/List/ToursList';
import { TourForm } from '@/components/Tours/TourForm/TourForm';

export default function Tours() {
  return (
    <main>
      <TourHeader />
      <TourForm />
      <ToursList />
    </main>
  );
}
