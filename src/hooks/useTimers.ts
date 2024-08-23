import { useEffect, useRef, useState } from 'react';
import { ITimer, ITimeRef } from '../types';
import { INITIAL_TIMERS_VALUES } from '../constants';

export const useTimers = () => {
  const [timers, setTimers] = useState<ITimer[]>([]);

  const requestAnimationsRef = useRef<ITimeRef>({});
  const previousTimesRef = useRef<ITimeRef>({});

  const addTimer = () => {
    const newTimer: ITimer = {
      id: Date.now(),
      ...INITIAL_TIMERS_VALUES
    };

    setTimers(timers => [...timers, newTimer]);
  };

  const deleteExpiredTimers = (id: number) => {
    delete requestAnimationsRef.current[id];
    delete previousTimesRef.current[id];
  };

  const removeLastTimer = () => {
    if (timers.length) {
      const lastTimer = timers[timers.length - 1];

      if (!lastTimer) {
        return;
      }

      cancelAnimationFrame(requestAnimationsRef.current[lastTimer.id]);
      deleteExpiredTimers(lastTimer.id);

      setTimers(timers => timers.slice(0, -1));
    }
  };

  const startPauseTimer = (id: number) => {
    setTimers(timers => timers.map(timer => {
      if (timer.id !== id) {
        return timer;
      }

      if (!timer.isRunning) {
        timer.startTime = performance.now() - timer.passedTime;
        requestAnimationsRef.current[id] = requestAnimationFrame((time) => updateTimer(id, time));
      } else {
        cancelAnimationFrame(requestAnimationsRef.current[id]);
        delete requestAnimationsRef.current[id];
      }

      return {
        ...timer,
        isRunning: !timer.isRunning
      };
    }));
  };

  const resetTimer = (id: number) => {
    cancelAnimationFrame(requestAnimationsRef.current[id]);
    deleteExpiredTimers(id);

    setTimers(timers => timers.map(timer =>
      timer.id === id ? { ...timer, ...INITIAL_TIMERS_VALUES } : timer
    ));
  };

  const updateTime = (id: number, time: number) => {
    const deltaTime = time - previousTimesRef.current[id];

    setTimers(prevTimers => prevTimers.map(timer => {
      if (timer.id === id && timer.isRunning) {
        return { ...timer, passedTime: timer.passedTime + deltaTime };
      }

      return timer;
    }));
  };

  const updateTimer = (id: number, time: number) => {
    if (previousTimesRef.current?.[id]) {
      updateTime(id, time);
    }

    previousTimesRef.current[id] = time;

    requestAnimationsRef.current[id] = requestAnimationFrame((newTime) => updateTimer(id, newTime));
  };

  useEffect(() => {
    const currentRequestAnimations = requestAnimationsRef.current;

    return () => {
      Object.values(currentRequestAnimations).forEach(cancelAnimationFrame);
    };
  }, []);

  return {
    timers,
    addTimer,
    removeLastTimer,
    startPauseTimer,
    resetTimer
  };
};