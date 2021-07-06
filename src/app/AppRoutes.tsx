import { useSelector } from 'react-redux';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import { RootState } from './store';
import Login from './pages/Login';
import Home from './pages/Home';

const AuthedRoute = (props: RouteProps) => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  return isAuth ? <Route {...props} /> : <Login />;
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Route path="/login" exact>
        <Login />
      </Route>
      <AuthedRoute path="/" exact>
        <Home />
      </AuthedRoute>
    </BrowserRouter>
  );
}

export default AppRoutes;
