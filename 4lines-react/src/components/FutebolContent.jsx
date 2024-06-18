import G5 from "./G5/G5";

export default function FutebolContent(){
    return(
        <main>
            <select name="campeonato" id="campeonato">
                <option value="brasileirao">Brasileirão Série A</option>
                <option value=""></option>
            </select>
            <div className="info-linha">                
                <div className="melhores">
                    <section className="info-content">
                        <h2>G5</h2>
                        <G5 />
                    </section>
                    <section className="info-content">
                        <h2>Artilharia</h2>
                        <img src="artilharia.png" alt="" />
                    </section>
                </div>            
                <section className="info-content">
                    <h2>Lesões</h2>
                    <img src="lesoes.png" alt="" />
                </section>
            </div>

            <section className="info">
            </section>
            <section className="info">
                <section className="info-content" id="calendario">
                    <h2>Calendário</h2>
                    <img src="calendario.png" alt="" />
                </section>
                <section className="info-content" id="cartoes">
                    <h2>Cartões</h2>
                    <img src="cartoes.png" alt="" />
                </section>

            </section>
            <section className="info" id="transferencia">                
                <section className="info-content">
                    <h2>Últimas Transferências</h2>
                    <img src="transferencia.png" alt="" />
                </section>
                <section className="info-content">
                    <h2>Notícias</h2>
                    <img src="noticia.png" alt="" />
                </section>
            </section>
        </main>
    )
}   