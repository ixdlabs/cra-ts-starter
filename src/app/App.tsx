import { Provider } from 'react-redux';
import store from '@store/index';
import AppRoutes from '@app/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
