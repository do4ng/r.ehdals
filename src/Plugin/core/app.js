/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */

// Plugins
import consoleClear from '../console/app.js';
import title from '../title/app';

let api = {}; // Plugin-Api

function getHash() {
  return window.location.hash.replace('plugin');
}

function getHref() {
  if (!window.location.href.includes('?')) {
    return {};
  }
  let href = window.location.href.split('?')[1].split('&');
  let result = {};
  href.forEach((element) => {
    element = element.split('=');
    result[element[0]] = element[1];
  });
  return result;
}

/* INIT */

function init() {
  api = {
    location: {
      hash: getHash(),
      href: getHref(),
    },
  };
}

// Plugin Main

export function PluginMain() {
  consoleClear(api.location.href);
  title(api.location.href);
}

/* ========== */

// Run (Edit Here)

export function Main() {
  init();
  PluginMain();
}
