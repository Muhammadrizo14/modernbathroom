import './App.scss'
import SideBar from "./Components/SideBar/index.jsx";
import arrowRight from './assets/img/arrows/arrowRight.png'
import activeArrow from './assets/img/arrows/active.png'
import disabledArrow from './assets/img/arrows/disabled.png'
import burgerMenu from './assets/img/burger.png'
import slide1 from './assets/img/slides/pic1.png'
import slide2 from './assets/img/slides/pic2.png'
import slide3 from './assets/img/slides/pic3.png'
import {useGSAP} from "@gsap/react";
import {useRef, useState} from "react";
import {gsap} from "gsap";
import {TextPlugin} from "gsap/dist/TextPlugin";
gsap.registerPlugin(TextPlugin);


import bg1 from './assets/img/bg1.png'
import bg2 from './assets/img/bg2.png'
import bg3 from './assets/img/bg4.png'
import bg4 from './assets/img/bg3.png'


function App() {
  const container = useRef()
  const tl = useRef()
  const title = useRef()

  const [backGround, setBg] = useState([bg1, bg2, bg3, bg4])
  const [counter, setCounter] = useState(0)


  const nextBg = (op)=> {
    console.log(counter + 1 + ' counter')
    if (op === 'next') setCounter(prev => prev+1)
    if (counter+1 === backGround.length) {
      console.log(setCounter(0))
    }


    if (op === 'prev') {
      if(counter > 0) {
        setCounter(prev => prev-1)
      }
    }

  }




  useGSAP(() => {

    tl.current = gsap
      .timeline()
      .fromTo('.line-main', {height: 0}, {height: 188, ease: 'power2.out', duration: 1.5})
      .to(title.current, {duration: 2, text: "MODERN"})
      .fromTo('.content-info-subtitle', {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, '-=1')
      .fromTo('.content-info-button', {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, '-=0.5')
      .fromTo('.right-content-list li', {
        x: 100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.5,
      }, '-=2')
      .fromTo('.slider-slides img', {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.5,
      }, '-=2')
      .fromTo('.arrows .arrow', {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.5,
      }, '-=2')
  }, {scope: container})

  return (
    <div className='wrap'>
      <div className='container' ref={container}>
        <SideBar/>
        <main className='content'>
          <div className="content-info">
            <h1 className='content-info-title' ref={title}></h1>
            <h3 className='content-info-subtitle' >BATHROOM</h3>
            <button className='content-info-button'>
              Dicover Now
              <img src={arrowRight} alt=""/>
            </button>
          </div>
        </main>
        <div className="bg-wrap">
          <div className='bg-color'>
            <div className="line-main"></div>
            <div className="line-main"></div>
          </div>
          <div className="bg-image">
            <div className='right-content'>
              <div className="slider-slides">
                <img src={slide1}  alt=""/>
                <img src={slide2} alt=""/>
                <img src={slide3} alt=""/>
              </div>
              <div className="right-content-menu">
                <div className="burger">
                  <img src={burgerMenu} alt=""/>
                </div>
                <ul className='right-content-list'>
                  <li>PRODUCT</li>
                  <li>NEW LAUNCHES</li>
                  <li>GALLERY</li>
                  <li>DEALER LOCATION</li>
                </ul>
                <div className="arrows">
                  <div className={`${counter === 0 ? 'disable' : 'able'} arrow`} onClick={()=> nextBg('prev')}>
                    <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg>
                  </div>
                  <div className={`${counter >= backGround.length ? 'disable' : 'able'}  arrow`}  onClick={()=> nextBg('next')}>
                    <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <img src={backGround[counter]} className='bathroom' alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;