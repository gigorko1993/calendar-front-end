export const calcTime = (startHour, startMinutes, endHour, endMinutes) => {
  const start = startHour * 60 + 1 * startMinutes - 480;
  const endPosition = endHour * 60 + 1 * endMinutes - 480;
  const duration = endPosition - start;
  return { start, duration };
};

export const calcEventPosition = (start, duration) => {
  const transform = start * 1.58;
  const height = duration * 1.58;
  return {
    transform,
    height,
  };
};
