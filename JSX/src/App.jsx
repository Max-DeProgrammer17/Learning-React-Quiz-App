import Head from './atom/head.atom'
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
        <Buttons />
      </div>
    </div>
      
    </>
  )
}

export default App
