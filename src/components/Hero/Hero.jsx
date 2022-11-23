import React from 'react';
import '../../css/Hero.css';

export default function Hero(props) {
  return (
    <header className='hero-header'>
      <div
        className='p-5 text-center bg-image hero-img'>
        <div className='mask-hero'>
          <div className='d-flex justify-content-center align-items-center h-100 hero-banner-img'>
            <div className='text-white'>
              <h1 className='mb-3 hero-header1'>Imagination at Work</h1>
              <h4 className='mb-3 hero-header2'>Try one bite and you’ll be hooked</h4>
              <a className='btn btn btn-primary btn-outline-light btn-lg' role='button' onClick={props.showOrderForm}>
                ORDER
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}