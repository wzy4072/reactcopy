import { parse } from 'qs';
import { query, create, remove, update } from '../services/users';

export default {
  namespace: 'users',
  state: {
    data: [],
    meta: {
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10,
      },
    },
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'query',
            payload: location.query,
          });
        }
      });
    },
  },
  effects: {
    * query({ payload }, { call, put }) {
      try {
        const { data } = yield call(query, parse(payload));
        yield put({
          type: 'querySuccess',
          payload: data,
        });
      } catch (error) {
        //
      }
    },
    * create({ payload }, { call, put }) {
      yield put({ type: 'hideModal' });
      yield put({ type: 'showLoading' });
      try {
        yield call(create, payload);
        yield put({
          type: 'createSuccess',
          payload,
        });
      } catch (error) {
        //
      }
    },
    * delete({ payload }, { call }) {
      try {
        yield call(remove, payload);
      } catch (error) {
        //
      }
    },
    * update({ payload }, { call, put }) {
      yield put({ type: 'hideModal' });
      yield put({ type: 'showLoading' });
      try {
        yield call(update, payload);
        yield put({
          type: 'updateSuccess',
          payload,
        });
      } catch (error) {
        //
      }
    },
  },
  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
    createSuccess(state, action) {
      return { ...state, data: [action.payload, ...state.data] };
    },
    showModal(state, action) {
      return { ...state, ...action.payload, modalVisible: true };
    },
    hideModal(state) {
      return { ...state, modalVisible: false };
    },
  },
};
