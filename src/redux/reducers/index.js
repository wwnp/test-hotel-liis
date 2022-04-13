import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import test from './test';
import homepage from './homepage';

export const history = createBrowserHistory();

const reducer = combineReducers({
  test,
  homepage,
  router: connectRouter(history),
});

export default reducer;