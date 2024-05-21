import TabelaBrasileirao from "../components/TabelaBrasileirao"

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
                    <img className="partidas" src="partidas.png" alt="" />
                </div>
            </div>
        </main>
    )
}