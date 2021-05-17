import ac from '../core/api/console';

const __name__ = { name: 'plugin-console', 'option-dev': 'plugin-console-dev' };

const ApiConsole = new ac(__name__.name);

export default function Main(page) {
  if (
    page[__name__['option-dev']] === 'false' ||
    !Object.keys(page).includes(__name__['option-dev'])
  ) {
    ApiConsole.apiClear();
  } else {
    ApiConsole.apiLog('Dev Mode');
  }
  // ApiConsole.apiLog('Window Loaded!');
}
