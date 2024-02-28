import React, {useRef} from 'react';
import './index.scss'
import Instagram from '../../assets/img/social/instagram.png'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const Index = () => {
  const tl = useRef()
  const container = useRef()

  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .fromTo(".logo", {
        x: -100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1
      })
      .fromTo('.line1', {height: 0}, {height: 188, ease: 'power2.out',})
      .fromTo(".sidebar-media a", {
        x: -100,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.3,
      })
      .fromTo('.line2', {height: 0}, {height: 188, ease: 'power2.out',})
  }, {scope: container});

  return (
    <div className='sidebar' ref={container}>
      <div className="logo">
        <h1>Pd</h1>
      </div>
      <div className="df">
        <div className='line line1'></div>
        <div className='line line-hidden'></div>
      </div>
      <div className="sidebar-media">
        <a href="https://github.com/Muhammadrizo14">
          <svg xmlns="http://www.w3.org/2000/svg" className='media' fill='#fff' viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/ubuntuous/">
          <img className='media' src={Instagram} alt=""/>
        </a>
        <a href="mailto:iozxckali@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" className='media' fill='#fff' viewBox="0 0 24 24">
            <path
              d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/>
          </svg>
        </a>
        {/* Telegram Desktop */}
      </div>
      <div className="df">
        <div className='line line2'></div>
        <div className='line line-hidden'></div>
      </div>
      <div className="sidebar-media">
        <a href="https://t.me/ubuntuous">
          <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' className='media' viewBox="0 0 50 50">
            <path
              d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
          </svg>
        </a>
      </div>

    </div>
  );
};

export default Index;