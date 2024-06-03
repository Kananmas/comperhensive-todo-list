
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Todo } from './pages/Todo';
import { SignIn } from './pages/Signin';
import { SignUp } from './pages/Singup';
import { TodoTabpanel } from './pages/TodoTabpanel';
import { Header } from './components/Header';
import { UserPanel } from './pages/UserPanel';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Header}>
            <Route index Component={Todo} />
            <Route path='signin' Component={SignIn} />
            <Route path='signup' Component={SignUp} />
            <Route path='todoinfo/:id' Component={TodoTabpanel} />
            <Route path='user' Component={UserPanel} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
