import { FC } from 'react';
import tourHeaderStyles from './styles/TourHeader.module.scss';

interface TourHeaderProps {}

export const TourHeader: FC<TourHeaderProps> = () => {
  return (
    <div className={tourHeaderStyles.heroImage}>
      <div className={tourHeaderStyles.overlay} />
    </div>
  );
};
