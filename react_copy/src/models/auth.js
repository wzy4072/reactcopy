import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { login, loggedIn, getAuthStore, logout } from '../services/auth';

export default {
  namespace: 'auth',
  state: {
    initialize: false,
    user: null,
    token_type: '',
    expires_in: '',
    access_token: '',
    refresh_token: '',
    permissions: '',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname !== '/login') {
          dispatch({
            type: 'check',
          });
        } else {
          dispatch({
            type: 'guest',
          });
        }
      });
    },
  },
  effects: {
    * check(action, { select, put }) {
      if (!loggedIn()) {
        yield put(routerRedux.push('/login'));
      } else {
        const initialize = yield select(({ auth }) => auth.initialize);
        if (!initialize) {
          yield put({ type: 'mapAuthStoreToState' });
        }
      }
    },
    * guest(action, { put }) {
      if (loggedIn()) {
        yield put(routerRedux.push('/loan-users'));
      }
    },
    * login({ payload }, { call, put }) {
      if (!loggedIn()) {
        try {
          const { data } = yield call(login, payload);
          yield put({ type: 'mapAuthStoreToState' });
          yield put({ type: 'loginSuccess', payload: data });
          yield put(routerRedux.push('/loan-users'));
        } catch (error) {
          const res = yield call(() => error.response.json());
          yield put({ type: 'loginError', payload: res.message });
        }
      }
    },
    * logout(action, { call, put }) {
      yield call(logout);
      yield put({ type: 'mapAuthStoreToState' });
      yield put(routerRedux.push('/login'));
    },
  },
  reducers: {
    loginSuccess(state, action) {
      message.success('登录成功');
      return { ...state, ...action.payload };
    },
    loginError(state, action) {
      message.error(action.payload || '账号或密码不正确');
      return state;
    },
    mapAuthStoreToState(state) {
      return { ...state, ...getAuthStore(), initialize: true };
    },
  },
};
