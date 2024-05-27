import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import './style/style.css'
import Loja from './screens/Loja';
import Futebol from './screens/Futebol';
import Basquete from './screens/Basquete';
import Jogos from './screens/Jogos';
import Noticias from './screens/Noticias';
import Perfil from './screens/Perfil';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';

function App() {
  // Retorna a estrutura de roteamento usando o BrowserRouter
  return (
    <Router>
      {/* Define as rotas usando o componente Routes */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Home" element={<Home />}  />
        <Route path="/Futebol" element={<Futebol/>}/>
        <Route path="/Basquete" element={<Basquete/>}/>
        <Route path="/Jogos" element={<Jogos/>}/> 
        <Route path="/Noticias" element={<Noticias/>}/>                       
        <Route path="/loja" element={<Loja/>} />
        <Route path="/Perfil" element={<Perfil/>} />
      </Routes>
    </Router>
  );
}
// Exporta o componente App como padrão
export default App;


