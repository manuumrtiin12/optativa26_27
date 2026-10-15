type Ranking = [number, string, boolean];

let position: number = 0;
let playerName: string;
let finishedGame: boolean;
let ranking: Ranking;
let hallOfRanking: Ranking[] = [];

position = 1;
playerName = "Laura";
finishedGame = true;

ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);

position = 2;
playerName = "Carlos";
finishedGame = false;

ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);

function printRankings(rankings: Ranking[]): void {
    for (let ranking of rankings) {
        console.log(ranking);
    }
}

printRankings(hallOfRanking);