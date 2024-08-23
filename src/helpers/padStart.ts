export const leftFillNum = (num: number, targetLength: number, padString: string) => {
  return num.toString().padStart(targetLength, padString);
};