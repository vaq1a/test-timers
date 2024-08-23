import { FC } from 'react';
import Button from '../Button/Button';
import { ITimer } from '../../types';
import Actions from '../Actions/Actions';
import { formatTime } from '../../helpers';

import styles from './Timer.module.css';

interface TimerProps {
  timer: ITimer;
  resetTimer: (id: number) => void;
  startPauseTimer: (id: number) => void;
}

const Timer: FC<TimerProps> = (
  {
    timer: {
      id,
      passedTime
    },
    startPauseTimer,
    resetTimer
  }
) => {
  const handleResetTimer = () => resetTimer(id);
  const handleStartPauseTimer = () => startPauseTimer(id);

  return (
    <div className={styles.container}>
      <span>{formatTime(passedTime)}</span>
      <Actions>
        <Button onClick={handleStartPauseTimer}>
          Start / Pause
        </Button>
        <Button onClick={handleResetTimer}>
          Reset
        </Button>
      </Actions>
    </div>
  );
};

export default Timer;
