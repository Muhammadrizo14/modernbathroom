import React, {useRef} from 'react';
import './index.scss'
import Facebook from '../../assets/img/social/facebook.png'
import Instagram from '../../assets/img/social/instagram.png'
import Twitter from '../../assets/img/social/twitter.png'

const Index = () => {
  return (
    <div className='sidebar'>
      <div className="logo">
        <h1>Pd</h1>
      </div>
      <div className='line'></div>
      <div className="sidebar-media">
        <img className='media' src={Facebook} alt=""/>
        <img className='media' src={Instagram} alt=""/>
        <img className='media' src={Twitter} alt=""/>
      </div>
      <div className='line'></div>
    </div>
  );
};

export default Index;