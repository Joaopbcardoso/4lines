import './TabelaJogos.css'

export default function TabelaJogos(){
    return(
        <div class="container">
        <div class="header">
            Brasileirão Série A - Rodada 6 de 38
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Partidas</th>
                    <th>Resultados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>São Paulo 2 - 1 Fluminense</td>
                    <td>Seg., 13/05</td>
                </tr>
                <tr>
                    <td>Internacional - Juventude</td>
                    <td>Adiado Hora TBD</td>
                </tr>
                <tr>
                    <td>Vasco da Gama 2 - 1 EC Vitória</td>
                    <td>Dom., 12/05</td>
                </tr>
                <tr>
                    <td>Bahia 1 - 0 Bragantino</td>
                    <td>Dom., 12/05</td>
                </tr>
                <tr>
                    <td>Palmeiras 0 - 0 Atlético-GO</td>
                    <td>Dom., 12/05</td>
                </tr>
                <tr>
                    <td>Athletico-PR 2 - 1 Cruzeiro</td>
                    <td>Dom., 12/05</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}