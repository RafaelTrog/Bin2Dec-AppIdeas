import BinCalc from './components/BinCalc'
import Footer from './components/Footer'
import './index.css'

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <BinCalc />
      </div>
      <Footer />
    </div>
  )
}

export default App