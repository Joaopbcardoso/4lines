export default function JogosContent(){
    return(
        <main>
            <div className="info-jogo">
                <div>
                <select name="campeonato" id="campeonato">
                <option value="brasileirao">Brasileirão Série A</option>
                <option value=""></option>
            </select>
                    <img className="brasileirao" src="brasileirao.png" alt="" />
                </div>
                <div>
                    <img className="partidas" src="partidas.png" alt="" />
                </div>
            </div>
        </main>
    )
}