import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '@app/store/auth/slice';

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

export { Login };
