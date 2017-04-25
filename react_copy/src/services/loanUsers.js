import qs from 'qs';
import request from '../utils/request';

export async function query(params) {
  return request(`/api/loan-users?${qs.stringify(params)}`);
}

export async function create(params) {
  return request('/api/loan-users', {
    method: 'post',
    body: qs.stringify(params),
  });
}

export async function remove(id) {
  return request(`/api/loan-users/${id}`, {
    method: 'delete',
  });
}

export async function update(loanUsers) {
  return request(`/api/loan-users/${loanUsers.id}`, {
    method: 'put',
    body: qs.stringify(loanUsers),
  });
}
