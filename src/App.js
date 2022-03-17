import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Youtube from './components/Youtube';
import Exemplo_Grid from './components/grid_dupla_pra_baixo';
import { Routes, Route } from "react-router-dom";
import { Contato } from './components/contato';



function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <Routes>
      <Route path="/exemplo_grid" element={ <Exemplo_Grid/> } />
      <Route path="/" element={ <Home/> } />
      <Route path="/youtube" element={ <Youtube/> } />
      <Route path="/contato" element={ <Contato/> } />
    </Routes>
    </div>
  )
}

export default App;





