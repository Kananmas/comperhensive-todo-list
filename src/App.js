import logo from './logo.svg';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>

    </Provider>
  );
}

export default App;
