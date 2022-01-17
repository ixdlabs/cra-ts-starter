import { Provider } from 'react-redux';
import { store } from '@app/store/index';
import { AppRoutes } from '@app/AppRoutes';

export function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
