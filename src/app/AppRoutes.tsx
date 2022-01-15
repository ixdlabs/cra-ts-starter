import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { RootState } from '@store/index';
import Login from '@pages/Login';
import Home from '@pages/Home';

function AuthedRoute() {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
