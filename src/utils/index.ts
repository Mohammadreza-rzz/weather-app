export const getCurrentTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  if (minutes < 10 && hours < 10) {
    return `0${hours}:0${minutes}`;
  } else if (minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
};
