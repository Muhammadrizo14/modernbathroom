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
import {useEffect, useRef, useState} from "react";
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
  const tl2 = useRef()
  const title = useRef()

  const [backGround, setBg] = useState([
    {
      id: 0,
      image: bg1,
      active: 'active'

    }, {
      id: 1,
      image: bg2,
      active: ''
    }, {
      id: 2,
      image: bg3,
      active: ''
    }, {
      id: 3,
      image: bg4,
      active: ''
    }
  ])
  const [counter, setCounter] = useState(0)


  const nextBg = async () => {

    if (counter + 1 === backGround.length) {
      setCounter(0)
      backGround[0].active = 'active'

      tl.current = gsap
        .timeline()
        .to(`.bathroom${backGround[counter].id}`, {x: '-100%', opacity: 0, ease: 'power4.inOut', duration: .7})
        .fromTo(`.bathroom${backGround[0].id}`,
          {
            x: '-100%', opacity: 0
          }, {
            x: '0%',
            ease: 'power4.inOut',
            opacity: 1,
            duration: .7
          }, '-=.4')
        .then(() => {
          console.log(1)
          backGround[counter].active = ''
        })
    } else {
      backGround[counter + 1].active = 'active'
      setCounter(prev => prev + 1)

      tl.current = gsap
        .timeline()
        .to(`.bathroom${backGround[counter].id}`, {x: '100%', opacity: 0, ease: 'power4.inOut', duration: .7})
        .fromTo(`.bathroom${backGround[counter + 1].id}`,
          {
            x: '-100%',
            opacity: 0
          }, {
            x: '0%',
            ease: 'power4.inOut',
            opacity: 1,
            duration: .7
          }, '-=.4')
        .then(() => {
          backGround[counter].active = ''
        })

    }
  }

  useEffect(() => {


    backGround[0].active = 'active'
  }, []);


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
      .fromTo(`.bathroom${backGround[0].id}`, {x: '-100%', opacity: 0,}, {
        x: 0,
        ease: 'power4.inOut',
        opacity: 1,
        duration: .7
      }, '-=3')
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
      .fromTo('.arrow__wrap', {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: .6
      }, '-=2')
  }, {scope: container})


  return (
    <div className='wrap'>
      <div className='container' ref={container}>
        <SideBar/>
        <main className='content'>
          <div className="content-info">
            <h1 className='content-info-title' ref={title}></h1>
            <h3 className='content-info-subtitle'>BATHROOM</h3>
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
                <img src={slide1} alt=""/>
                <img src={slide2} alt=""/>
                <img src={slide3} alt=""/>
              </div>
              <div className="right-content-menu">
                {/*<div className="burger">*/}
                {/*  <img src={burgerMenu} alt=""/>*/}
                {/*</div>*/}
                <ul className='right-content-list'>
                  <li>PRODUCT <div className='circle'/></li>
                  <li>NEW LAUNCHES <div className='circle'/></li>
                  <li>GALLERY <div className='circle'/></li>
                  <li>DEALER LOCATION <div className='circle'/></li>
                </ul>
                <div className="arrows">
                  <div className={`${counter >= backGround.length ? 'disable' : 'able'}  arrow  arrow__wrap`}
                       onClick={() => nextBg()}>
                    <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                      <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bathroom-list">
              {backGround.map(bg => (
                <img key={bg.id} src={bg.image}
                     className={`bathroom bathroom${bg.id} ${bg.active}`} alt=""/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;