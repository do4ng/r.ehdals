/* eslint-disable no-unused-vars */
let $userName = 'unknown';

function $log(message, data = { name: $userName }) {
  console.log(`[${data.name}] ${message}`);
}
function $editElementById(id, content, data = { name: $userName }) {
  document.getElementById(id).innerHTML = content;
  console.warn(`[${data.name}] Edit Element : ${id}`);
}
function $info() {
  console.log('=============== INFO ===============');
  console.log(
    '%c function ',
    'background-color: #ffa59e; border-radius: 3px; color: #ffffff;'
  );
  console.log(
    `%c $log(message: string): void`,
    'font-weight: bold;',
    ' - Print Message'
  );
  console.log(
    '%c var ',
    'background-color: #ffa59e; border-radius: 3px; color: #ffffff;'
  );
  console.log(`%c $userName: string`, 'font-weight: bold;', ' - Client Name');
  console.log(
    '%c info ',
    'background-color: #ffa59e; border-radius: 3px; color: #ffffff;'
  );
  console.log(
    `%c Template By r.ehdals`,
    'font-weight: bold;',
    ' - Repository : https://github.com/kangdongmandoo/r.ehdals'
  );
  return '';
}
