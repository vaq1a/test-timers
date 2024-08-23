export interface IInitialTimerValues {
  startTime: number;
  passedTime: number;
  isRunning: boolean;
}

export interface ITimer extends IInitialTimerValues {
  id: number;
}