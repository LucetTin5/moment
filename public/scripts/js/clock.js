const clock = document.querySelector(".clock");

const setTime = () => {
  const time = new Date().toString().split(" ")[4];
  const [hours, minutes, seconds] = time.split(":");
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
