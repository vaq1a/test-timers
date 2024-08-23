import { FC } from 'react';
import { useTimers } from '../../hooks';
import Button from '../Button/Button';
import TimersGrid from '../TimersGrid/TimersGrid';
import Actions from '../Actions/Actions';

import styles from './Timers.module.css';

const Timers: FC = () => {
  const {
    timers,
    addTimer,
    removeLastTimer,
    startPauseTimer,
    resetTimer
  } = useTimers();

  return (
    <div className={styles.container}>
      <Actions>
        <Button onClick={addTimer}>Add Timer</Button>
        <Button onClick={removeLastTimer}>Remove</Button>
      </Actions>
      <TimersGrid
        timers={timers}
        resetTimer={resetTimer}
        startPauseTimer={startPauseTimer}
      />
    </div>
  );
};

export default Timers;