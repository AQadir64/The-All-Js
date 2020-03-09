const timeInterval = 2000;
// eslint-disable-next-line no-empty-function
const intervalId = setInterval(() => {},
 timeInterval);
document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
