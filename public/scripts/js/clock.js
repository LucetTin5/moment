const clock = document.getElementById("clock");

const getTime = () => {
  const time = new Date().toString().split(" ")[4];
  const [hours, minutes, seconds] = time.split(":");
  return [hours, minutes];
};
const setTime = () => {
  let [hours, minutes] = getTime();
  if (hours.length === 1) {
    hours = "0" + hours;
  }
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  return (clock.innerText = `${hours} : ${minutes}`);
};

export const clockFunc = () => {
  setTime();
  setInterval(() => setTime(), 1000);
};
