import './App.scss'
import SideBar from "./Components/SideBar/index.jsx";
import arrowRight from './assets/img/arrowRight.png'
import bg1 from './assets/img/bg1.png'

function App() {
  return (
    <div className='wrap'>
      <div className='container'>
        <SideBar/>
        <main className='content'>
          <div className="content-info">
            <h1 className='content-info-title'>MODERN</h1>
            <h3 className='content-info-subtitle'>BATHROOM</h3>
            <button>
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
          <img src={bg1} className='bathroom' alt=""/>
        </div>
      </div>
    </div>
  )
}

export default App;