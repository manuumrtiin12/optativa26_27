"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let position = 0;
let playerName;
let finishedGame;
let ranking;
let hallOfRanking = [];
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
function printRankings(rankings) {
    for (let ranking of rankings) {
        console.log(ranking);
    }
}
printRankings(hallOfRanking);
//# sourceMappingURL=ejercicio1.js.map