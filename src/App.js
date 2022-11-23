import React from 'react';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.jsx';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Menu from './components/Menu/Menu.jsx';
import SiginForm from './components/SigninForm/SigninForm.jsx';
import SignupForm from './components/SignupForm/SignupForm.jsx';
import Hero from './components/Hero/Hero.jsx';
import Combo from './components/Combo/Combo.jsx';
import OrderForm from './components/OrderForm/OrderForm.jsx';
import Cart from './components/Cart/Cart.jsx';



function App() {
  return (
    <Provider store={store}>
      <Header />
      {/* <Cart /> */}
      {/* <OrderForm /> */}
      <Hero />
      <Combo />
      {/* <SiginForm /> */}
      {/* <SignupForm /> */}
      <Menu />
      <Footer />
    </Provider>
  );
}

export default App;
