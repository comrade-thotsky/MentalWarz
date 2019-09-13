import Player from "/src/Player";
document.addEventListener("keydown", function(event) {
  console.log(event.which);
});
let canvas = document.getElementById("gameScreen");
let c = canvas.getContext("2d");
var PlayerX = 20;
var PlayerY = 20;
const CanvasWidth = 800;
const CanvasHeight = 600;