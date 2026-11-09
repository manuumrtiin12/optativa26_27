type Ranking = [number, string, boolean];

let position: number;
let playerName: string;
let haTerminado: boolean;
let ranking: Ranking;
let todosRankings: Ranking[] = [];

position = 1;
playerName = "Carlos";
haTerminado = true;

ranking = [position, playerName, haTerminado];
todosRankings.push(ranking);

position = 2;
playerName = "Ana";
haTerminado = false;

ranking = [position, playerName, haTerminado];
todosRankings.push(ranking);

function printRankings(rankings: Ranking[]): void {
    rankings.forEach(rank => {
        console.log("Posición " + rank[0] + " - Jugador: " + rank[1] + " - Terminado: " + (rank[2] ? "Sí" : "No"));
    });
}

printRankings(todosRankings);