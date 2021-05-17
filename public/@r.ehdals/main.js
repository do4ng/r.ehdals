function $log(message, data = { name: 'unknown' }) {
  console.log(`[${data.name}] ${message}`);
}
function $editElementById(id, content, data = { name: 'unknown' }) {
  document.getElementById(id).innerHTML = content;
  console.warn(`[${data.name}] Edit Element : ${id}`);
}
