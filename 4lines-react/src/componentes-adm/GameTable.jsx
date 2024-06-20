export default function GameTable_adm() {
const games = [
  { league: "Campeonato Brasileiro - Série C", result: "2 - 1", opponent: "FAC" },
  { league: "Campeonato Catarinense", result: "1 - 3", opponent: "Barra FC" },
  { league: "Campeonato Catarinense", result: "3 - 1", opponent: "Barra FC" },
  { league: "Campeonato Catarinense", result: "3 - 1", opponent: "EC" },
  { league: "Campeonato Catarinense", result: "1 - 0", opponent: "Chapecoense" },
  { league: "Campeonato Catarinense", result: "1 - 2", opponent: "Avaí FC" },
  { league: "Campeonato Catarinense", result: "0 - 0", opponent: "Hercílio Luz FC" }
];

const GameTable = () => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.tr}>
        <th className={styles.th}>League</th>
        <th className={styles.th}>Result</th>
        <th className={styles.th}>Opponent</th>
      </tr>
    </thead>
    <tbody>
      {games.map((game, index) => (
        <tr className={styles.tr} key={index}>
          <td className={styles.td}>{game.league}</td>
          <td className={styles.td}>{game.result}</td>
          <td className={styles.td}>{game.opponent}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
}
//cesar
//asdhuadhusda
//asdbsdah


<h1>asd</h1>
