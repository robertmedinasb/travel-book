import { FC } from 'react';
import { Tour } from '../types/Tour';
import TourCardStyles from './styles/TourCard.module.scss';
import Image from 'next/image';
import tourImg from '@/assets/images/download.jpeg';

export const TourCard: FC<Tour> = (tour) => {
  return (
    <div className={TourCardStyles.card}>
      <div className={TourCardStyles.cardImage}>
        <Image src={tourImg} alt={tour.name} />
      </div>
      <div className={TourCardStyles.info}>
        <span className={TourCardStyles.name}>{tour.name}</span>
        <span className={TourCardStyles.description}>{tour.description}</span>
      </div>
    </div>
  );
};
