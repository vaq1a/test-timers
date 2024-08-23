import { FC } from 'react';
import { ITimer } from '../../types';
import Timer from '../Timer/Timer';
import TimersEmpty from '../TimersEmpty/TimersEmpty';

import styles from './TimersGrid.module.css';

interface TimersGridProps {
  timers: ITimer[];
  resetTimer: (id: number) => void;
  startPauseTimer: (id: number) => void;
}

const TimersGrid: FC<TimersGridProps> = (
  {
    timers,
    resetTimer,
    startPauseTimer
  }
) => {
  if (!timers?.length) {
    return (
      <TimersEmpty />
    );
  }

  return (
    <div className={styles.container}>
      {timers.map(timer => (
        <Timer
          key={timer.id}
          timer={timer}
          resetTimer={resetTimer}
          startPauseTimer={startPauseTimer}
        />
      ))}
    </div>
  );
};

export default TimersGrid;
