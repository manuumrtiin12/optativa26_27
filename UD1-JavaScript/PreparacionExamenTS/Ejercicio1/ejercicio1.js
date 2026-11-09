"use strict";
let position;
let playerName;
let haTerminado;
let ranking;
let todosRankings = [];
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
function printRankings(rankings) {
    rankings.forEach(rank => {
        console.log("Posición " + rank[0] + " - Jugador: " + rank[1] + " - Terminado: " + (rank[2] ? "Sí" : "No"));
    });
}
printRankings(todosRankings);
