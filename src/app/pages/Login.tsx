import { useDispatch } from 'react-redux';
import { loginAction } from '@store/slices/authSlice';

function Login() {
  const dispatch = useDispatch();

  const login = () => dispatch(loginAction());

  return (
    <>
      <div>Login</div>
      <button onClick={login} type="button">
        Login
      </button>
    </>
  );
}

export default Login;
