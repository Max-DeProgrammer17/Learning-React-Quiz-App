import Head from './atom/head.atom'
import Option from './atom/option.atom'
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
   
    </div>
      
    </>
  )
}

export default App
