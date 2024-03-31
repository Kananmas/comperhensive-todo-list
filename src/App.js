
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Todo } from './pages/Todo';
import { SignIn } from './pages/Signin';
import { SignUp } from './pages/Singup';
import { TodoTabpanel } from './pages/TodoTabpanel';
import { checkForJwt } from './utils/check-for-jwt.utils';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    checkForJwt();
  }, [])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Todo} />
          <Route path='/signin' Component={SignIn} />
          <Route path='/signup' Component={SignUp} />
          <Route path='/todoinfo' Component={TodoTabpanel} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
