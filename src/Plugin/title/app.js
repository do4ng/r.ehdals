import ac from '../core/api/console';

const __name__ = { name: 'plugin-title', 'option-dev': 'plugin-title-dev' };

const ApiConsole = new ac(__name__.name);

export default function Main(page) {
  if (
    page[__name__['option-dev']] === 'false' ||
    !Object.keys(page).includes(__name__['option-dev'])
  ) {
    var result;
    var url = document.location.href.split('/');
    if (url[3] === '') {
      result = 'Home - ';
    } else if (url[3] === 'p') {
      let p = url[4];
      if (p.indexOf('#') > 0) {
        p = url[4].substring(0, url[4].indexOf('#'));
      }
      result = p + ' - ';
    } else if (url[3] === 'user') {
      result = `@${decodeURI(url[4])} - `;
    } else {
      ApiConsole.apiLog('Page Not Defined');
      result = `${decodeURI(url[3])} - `;
    }
    document.title = result + 'r.ehdals';
  } else {
    ApiConsole.apiLog('Dev Mode');
  }
  // ApiConsole.apiLog('Window Title Changed');
}
