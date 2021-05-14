/* eslint-disable no-unused-vars */
export function nowTime() {
  const day = new Date();
  const utc = day.getHours();
  var result = '오전 ' + utc;
  if (utc >= 12) {
    result = '오후';
  }
  if (utc > 12) {
    result = result + ` ${utc - 12}`;
  }
  return `${day
    .toTimeString()
    .split('(')[1]
    .replace(')', '')} ${day.getFullYear()}년 ${
    day.getMonth() + 1
  }월 ${day.getDate()}일 ${result}시 ${day.getMinutes()}분 ${day.getSeconds()}초`;
}
