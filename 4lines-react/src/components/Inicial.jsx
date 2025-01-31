import { useNavigate } from 'react-router-dom';
import GameTable from './GameTable';
import Placares from './Placares/Placares';

export default function Inicial(){
    const irPara= useNavigate();
    const paraFutebol = () => {
        irPara('/Futebol');
      };
      const paraBasquete = () => {
        irPara('/Basquete');
      };
      const paraJogos = () => {
        irPara('/Jogos');
      };
      const paraNoticias = () => {
        irPara('/Noticias');
      };
    const paraLoja = () => {
      irPara('/Loja');
    };
    return(
        <main>
            <div className="info-principal">
                <div className="campeonato">
                    <h2 className="tabela-title">Placares</h2>
                    <Placares />
                </div>
                <div noticia-principal>
                    <img className="noticia" src="noticia-jamal.png" alt="" />
                </div>
            </div>
<div className="navbar">
    <button className="nav-button" onClick={paraFutebol}>
        <div className="button-content">
            <img src="bola.png" alt="" />
            <div className="text-container">
                <span className="button-text">Futebol</span>
            </div>
        </div>
    </button>
    <button className="nav-button" onClick={paraBasquete}>
        <div className="button-content">
            <img src="basquete.png" alt="" />
            <div className="text-container">
                <span className="button-text">Basquete</span>
            </div>
        </div>
    </button>
    <button className="nav-button" onClick={paraJogos}>
        <div className="button-content">
            <img src="apito.png" alt="" />
            <div className="text-container">
                <span className="button-text">Jogos</span>
            </div>
        </div>
    </button>
    <button className="nav-button" onClick={paraNoticias}>
        <div className="button-content">
            <img src="news.png" alt="" />
            <div className="text-container">
                <span className="button-text">Notícias</span>
            </div>
        </div>
    </button>
    <button className="nav-button" onClick={paraLoja}>
        <div className="button-content">
            <img src="loja.png" alt="" />
            <div className="text-container">
                <span className="button-text">Loja</span>
            </div>
        </div>
    </button>
</div>


        </main>
        
    )
}