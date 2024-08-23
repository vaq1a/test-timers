import { leftFillNum } from '../helpers';

export const formatTime = (ms: number): string => {
  const minutes = leftFillNum(Math.floor(ms / 60000), 2, '0');
  const seconds = leftFillNum(Math.floor((ms % 60000) / 1000), 2, '0');
  const milliseconds = leftFillNum(Math.floor(ms % 1000), 3, '0');

  return `${minutes}:${seconds}.${milliseconds}`;
};