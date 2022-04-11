import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { HomePage } from "./containers/HomePage";
import { LoginPage } from "./containers/LoginPage";
import './index.css'
import './grid.css'
import { PrivateRoute } from "./routes/PrivateRoute";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter basename="test-hotel-liis">
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={
        <PrivateRoute >
          <HomePage />
        </PrivateRoute>
      }></Route>
    </Routes>
  </BrowserRouter>,
);