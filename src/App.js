import React from 'react';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.jsx';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Menu from './components/Menu/Menu.jsx';
import SiginForm from './components/SigninForm/SigninForm.jsx';
import SignupForm from './components/SignupForm/SignupForm.jsx';

function App() {
  return (
    <Provider store={store}>
      <Header />
      {/* <SiginForm /> */}
      {/* <SignupForm /> */}
      <Menu />
      <Footer />
    </Provider>
  );
}

export default App;
