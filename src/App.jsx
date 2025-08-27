import './App.css'
import Lista from './components/Lista'
function App() {

  return (
      <div className='App'>
          <div className='App-teste'>
            <h1 className=' texto'>Hololive Vtubers</h1>
            <img  className='image'  src='./public/Hololive Button.png' alt='Hololive' width={250}/>
        </div>
        <Lista/>
      </div>
  )
}

export default App
