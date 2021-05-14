/* eslint-disable no-unused-vars */
export function utc() {
  const day = new Date();
  const utc = day.getUTCHours();
  var result = '오전 ' + utc;
  if (utc >= 12) {
    result = '오후';
  }
  if (utc > 12) {
    result = result + ` ${utc - 12}`;
  }
  return `UTC ${day.getUTCFullYear()}년 ${
    day.getUTCMonth() + 1
  }월 ${day.getUTCDate()}일 ${result}시 ${day.getUTCMinutes()}분 ${day.getUTCSeconds()}초`;
}
