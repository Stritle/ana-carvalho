
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Livros from './pages/Livros'
import Main from './pages/main'
import Sobre from './pages/Sobre'

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />
        <Livros />
        <Sobre />
      </Router>

    </div>
  )
}

export default App
