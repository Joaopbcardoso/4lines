import TabelaBrasileirao from "../components/TabelaBrasileirao";
import TabelaJogos from "./jogos/TabelaJogos";

export default function JogosContent(){
    return(
        <main>
            <div className="info-jogo">
                <div>
                <select name="campeonato" id="campeonato">
                <option value="brasileirao">Brasileirão Série A</option>
                <option value=""></option>
            </select>
            <TabelaBrasileirao/>
                </div>
                <div>
                    <TabelaJogos/>
                </div>
            </div>
        </main>
    )
}
//GA