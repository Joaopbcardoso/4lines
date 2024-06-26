import { useNavigate } from 'react-router-dom';
import GameTable_adm from './GameTable';


export default function Inicial_adm(){
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
        irPara('/Noticias_adm');
      };
    const paraLoja = () => {
      irPara('/Loja');
    };
    return(
        <main>
            <div className="info-principal">
                <div className="campeonato">
                    <h2 className="tabela-title">Placares</h2>
                    <GameTable_adm/>
                </div>
                <div noticia-principal>
                    <img className="noticia" src="noticia-jamal.png" alt="" />
                </div>
            </div>
            <div className="navbar">
                <button onClick={paraFutebol}><img className="futebol-button" src="bola.png" alt="" /></button>
                <button onClick={paraBasquete}><img className="basquete-button" src="basquete.png" alt="" /></button>
                <button onClick={paraJogos}><img className="" src="apito.png" alt="" /></button>
                <button onClick={paraNoticias}><img src="news.png" alt="" /></button>
                <button onClick={paraLoja}><img src="loja.png" alt="" /></button>
            </div>
        </main>
        
    )
}