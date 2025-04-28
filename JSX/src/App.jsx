import Head from './atom/head.atom'
import Option from './atom/option.atom'
import Buttons from './molecule/buttons.molecule'
import './App.css'

function App() {
  return (
    <>
    <div className='main-container'>
      <div className='container-one'>
         <Head />
      </div>
      <div className="container-two">
        <Option />
      </div>
   
      <div className="container-three">
        <Buttons />
      </div>
    </div>
      
    </>
  )
}

export default App
