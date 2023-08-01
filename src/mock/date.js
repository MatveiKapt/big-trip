import dayjs from 'dayjs';

const generateTime = () => {
  const start = dayjs().subtract(Math.floor(Math.random() * 7), 'day')
                        .subtract(Math.floor(Math.random() * 24), 'hour')
                        .subtract(Math.floor(Math.random() * 60), 'minute');
  
  const durationInMinutes = Math.floor(Math.random() * 1440);
  const end = start.add(durationInMinutes, 'minute');

  let duration;
  if (durationInMinutes < 60) {
    duration = durationInMinutes + 'M';
  } else if (durationInMinutes < 1440) {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    duration = hours.toString().padStart(2, '0') + 'H ' + minutes.toString().padStart(2, '0') + 'M';
  } else {
    const days = Math.floor(durationInMinutes / 1440);
    const hours = Math.floor((durationInMinutes % 1440) / 60);
    const minutes = (durationInMinutes % 1440) % 60;
    duration = days + 'D ' + hours.toString().padStart(2, '0') + 'H ' + minutes.toString().padStart(2, '0') + 'M';
  }

  return {
    startTime: start.format('HH:mm'),
    endTime: end.format('HH:mm'),
    duration: duration,
  };
}

export {generateTime};
