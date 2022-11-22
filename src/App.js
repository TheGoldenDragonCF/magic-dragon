import React from 'react';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.jsx';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Menu from './components/Menu/Menu.jsx';
import SiginForm from './components/SigninForm/SigninForm.jsx';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SiginForm />
      <Menu />
      <Footer />
    </Provider>
  );
}

export default App;
