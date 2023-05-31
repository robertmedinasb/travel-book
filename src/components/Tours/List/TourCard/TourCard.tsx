import { FC } from 'react';
import { Tour } from '../types/Tour';
import TourCardStyles from './styles/TourCard.module.scss';
import Image from 'next/image';

interface TourCardProps extends Tour {
  peopleCount: number;
}

export const TourCard: FC<TourCardProps> = ({ peopleCount, ...tour }) => {
  return (
    <div className={TourCardStyles.card}>
      <div className={TourCardStyles.cardImage}>
        <Image src={tour.image} alt={tour.name} width={150} height={300} />
      </div>
      <div className={TourCardStyles.info}>
        <span className={TourCardStyles.name}>{tour.name}</span>
        <span className={TourCardStyles.description}>{tour.description}</span>
        <div className={TourCardStyles.duration}>
          <p style={{ fontSize: '16px' }}>{tour.duration}</p>
        </div>
        <div className="flex flex-col">
          <div className={TourCardStyles.price}>
            <p style={{ fontSize: '14px' }}>
              {peopleCount} {'persona(s) desde: '}
              <span style={{ fontSize: '20px' }}>
                {' '}
                S/. {tour.price * peopleCount}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
