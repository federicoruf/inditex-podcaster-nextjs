const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

const slicer = (value: number) => ('0' + value).slice(-2);

export const formatMilliseconds = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  ('0' + minutes).slice(-2);
  return `${hours}:${slicer(minutes)}:${slicer(seconds)}`;
};

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const formattedDate = date.toLocaleDateString('es-ES');
  return formattedDate;
};

export const hasPassedTimeLimit = (requestTime: number) => {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - requestTime;
  return timeDifference >= TWENTY_FOUR_HOURS;
};
