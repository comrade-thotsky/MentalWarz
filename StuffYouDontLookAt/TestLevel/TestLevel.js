import Player from "../GameMechanics/Player"
let canvas = document.getElementById("gameScreen");
let c = canvas.getContext("2d");

function DrawPlayer(PlayerX, PlayerY, PlayerSize, PlayerColor){
    c.fillStyle = PlayerColor;
    c.fillRect(PlayerX, PlayerY, PlayerSize, PlayerSize);
}
var PlayerX = 20;
var PlayerY = 20;
var PlayerSize = 100;
var PlayerColor = "red";
DrawPlayer(PlayerX, PlayerY, PlayerSize, PlayerColor);