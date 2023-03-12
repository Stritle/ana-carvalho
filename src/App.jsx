
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Contacto from './pages/Contacto';
import Eventos from './pages/Eventos';
import Livros from './pages/Livros'
import Main from './pages/Main'
import NaMidia from './pages/NaMidia';
import Sobre from './pages/Sobre'

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />
        <Livros />
        <NaMidia />
        <Sobre />
        <Eventos />
        <Contacto />
        <Footer />
      </Router>

    </div>
  )
}

export default App
