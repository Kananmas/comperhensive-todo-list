
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Todo } from './pages/Todo';
import { SignIn } from './pages/Signin';
import { SignUp } from './pages/Singup';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Todo}/>
          <Route path='/signin' Component={SignIn}/>
          <Route path='/signup' Component={SignUp}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
