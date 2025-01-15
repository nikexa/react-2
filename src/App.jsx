import './App.css'
import img from './img.png'
import rth from './rth.png'
import oval from './Oval.png'
import clock from './Clock.png'
import eye from './Eye.png'

function App() {

  return (
    <>
          <div className="main">
            <div className="top">
              <img className='first' src={img} alt="" />
              <div className="ragaca">
              <img className='second' src={eye} alt="" />
              </div>
            </div>


            <div className="mid">
              <p className="first">Equilibrium #3429</p>
              <p className="second">Our Equilibrium collection promotes <br /> balance and calm.</p>
              <div className="ragacas">
                <div className="eth">
                <img src={rth} alt="" />
                </div>
                <div className="dge">
                  <img src={clock} alt="" />
                  <p>3 days left</p>
                </div>
              </div>
            </div>

            <div className="line"></div>

            <div className="bottom">
              <img src={oval} alt="" />
              <p className="first">Creation of</p>
              <p className="second">Jules Wyvern</p>

            </div>

          </div>
    </>
  )
}

export default App
