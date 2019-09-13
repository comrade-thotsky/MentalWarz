import Player from "../GameMechanics/Player"
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

function DrawPlayer(PlayerX, PlayerY, PlayerSize, PlayerColor){
    ctx.fillStyle = PlayerColor;
    ctx.fillRect(PlayerX, PlayerY, PlayerSize, PlayerSize);
}
var PlayerX = 20;
var PlayerY = 20;
var PlayerSize = 100;
var PlayerColor = "red";
DrawPlayer(PlayerX, PlayerY, PlayerSize, PlayerColor);