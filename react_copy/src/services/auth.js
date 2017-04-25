import qs from 'qs';
import request from '../utils/request';

let authStore = {
  user: localStorage.getItem('user'),
  token_type: localStorage.getItem('token_type'),
  expires_in: localStorage.getItem('expires_in'),
  access_token: localStorage.getItem('access_token'),
  refresh_token: localStorage.getItem('refresh_token'),
  permissions: localStorage.getItem('permissions'),
};

if (authStore.user) {
  authStore.user = JSON.parse(authStore.user);
}

if (authStore.permissions) {
  authStore.permissions = JSON.parse(authStore.permissions);
}

export async function login(credentials) {
  return request('/api/login', {
    method: 'post',
    body: qs.stringify(credentials),
  }).then(({ data }) => {
    Object.keys(data).forEach(key => {
      let value = data[key];
      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    });
    authStore = data;
    return { data };
  });
}

export function getAuthStore() {
  return authStore;
}

export function logout() {
  Object.keys(authStore).forEach(item => {
    delete localStorage[item];
    authStore[item] = '';
  });
}

export function loggedIn() {
  return authStore.access_token && Date.now() > authStore.expires_in;
}
