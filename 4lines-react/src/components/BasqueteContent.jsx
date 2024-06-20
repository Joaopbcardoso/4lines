export default function BasqueteContent(){
    return(
        <main> 
            <div className="column2">
                <div className="column1">
                <select name="campeonato" id="campeonato">
                    <option value="nba">NBA</option>
                    <option value=""></option>
                </select>
                <div className="melhores">
                    <section className="info-content">
                        <h2>G5</h2>
                        <img src="g5nba.png" alt="" />
                    </section>
                    <section className="info-content"> 
                        <h2>MVPs</h2>
                        <img src="mvps.png" alt="" />
                    </section>
                </div> 
                <div className="proximos">           
                    <section className="info-content">
                        <h2>Próximos Jogos</h2>
                        <img src="proximos.png" alt="" />
                    </section>            
                    <section className="info-content">
                    <h2>Transferências</h2>
                    <img src="transferencianba.png" alt="" />
                </section>
                </div>  
            </div>
            <div className="coluna-noticia">
                <section className="noticia-basquete">
                    <h2>Notícias</h2>
                    <img src="noticia-atlanta.png" alt="" />
                    <img src="noticia-pacers.png" alt="" />
                </section>
            </div>
            </div>
        </main>
        
    )
}
