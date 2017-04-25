import fetch from 'dva/fetch';
const cookie = require('cookie');

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {

  const defaultOptions = {
    credentials: 'same-origin', // fetch 默认不发送cookie （omit 默认, same-origin, include）
    headers: {
      Accept: 'application/x.gfboa.v1+json',
      'content-type': 'application/x-www-form-urlencoded',
      'X-CSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'],
      Authorization: `${localStorage.token_type} ${localStorage.access_token}`,
    },
  };

  return fetch(url, { ...defaultOptions, ...options })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }));
}
