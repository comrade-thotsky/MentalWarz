let canvas = document.getElementById("gameScreen");
let c = canvas.getContext("2d");
var x = 20;
var y = 20;
var size = 100;
var color = "red";
document.addEventListener("keydown", function(event){
    console.log(event.which);
    if(event.which == 87){
        c.clearRect(x,y,size,size);
        c.fillStyle = color;
        x -= 20;
        c.fillRect(x,y,size,size);
    }
})

c.fillStyle = color;
c.fillRect(x,y,size,size);