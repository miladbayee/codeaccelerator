const targetDate = "2023/10/09";
const targetDateTime = new Date(targetDate).getTime();
const currentDate = new Date().getTime();

function differenceInTime(targetTime, currentTime) {
  const day = 1000 * 3600 * 24;
  return (targetTime - currentTime) / day;
}
const calcTime = differenceInTime(targetDateTime, currentDate);
if (calcTime >= 0) {
  console.log(`${Math.floor(calcTime)} days mondet to target time `);
} else {
  console.log(`${Math.ceil(calcTime)} days pass for target time `);
}
