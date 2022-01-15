import { useDispatch } from 'react-redux';
import { loginAction } from '@store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const goto = useNavigate();

  const login = () => {
    dispatch(loginAction());
    goto('/');
  };

  return (
    <>
      <div>Login</div>
      <button
        className="bg-blue-500 p-[8px] rounded-md"
        onClick={login}
        type="button"
      >
        Login
      </button>
    </>
  );
}

export default Login;
