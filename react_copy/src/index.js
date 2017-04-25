import dva from 'dva';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';
import './index.html';
import './index.less';

// 1. Initialize
const app = dva({
  // history: browserHistory,
  onError(e) {
    console.log(e);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/auth'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');