import { HomePage } from "./containers/HomePage";
import { LoginPage } from "./containers/LoginPage";
import './index.css'
import './grid.css'
import './style.loader.css'
import { PrivateRoute } from "./routes/PrivateRoute";
import ReactDOM from 'react-dom';
import "react-alice-carousel/lib/alice-carousel.css";
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store from "./redux";
import { Provider } from "react-redux";
import { history } from "./redux/reducers";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/test-hotel-liis/login' exact>
          <LoginPage />
        </Route>
        <Route path='/test-hotel-liis/' exact>
          <PrivateRoute >
            <HomePage />
          </PrivateRoute>
        </Route>
      </Switch>
    </ConnectedRouter >
  </Provider>
  ,
  document.getElementById('root')
);


