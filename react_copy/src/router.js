import React from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';

export default ({ history, app }) => {
  const routes = [
    {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require('./routes/Login'));
        });
      },
    },
    {
      path: '/loan-users',
      name: 'loanUsers',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          app.model(require('./models/loanUsers'));
          cb(null, require('./routes/LoanUsers'));
        });
      },
    },
    {
      path: '/users',
      name: 'users',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          app.model(require('./models/users'));
          cb(null, require('./routes/Users'));
        });
      },
    },
  ];

  return (
    <Router history={history} routes={routes} />
  );
};
