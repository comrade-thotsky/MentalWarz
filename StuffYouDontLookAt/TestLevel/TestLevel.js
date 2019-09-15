let canvas = document.getElementById("gameScreen");
let c = canvas.getContext("2d");
var size = 20;
var position = [0,1];
var Obsticals = [[5,10,2,2,"dynamicx", 5, 10, "up"]];
var color = "blue";
var jump = false;
var left = false;
var right = false;
document.addEventListener("keydown", function(event){
    console.log(event.which);
    // w
    if(event.which == 87){
        if(jump == false){
            jump = true;
        }
    }
    //a
    if(event.which == 65){

    }
    //d
    if(event.which == 68){
    }
    //space
    if(event.which == 32){
        if(jump == false){

        }
    }
})
function PlayerGravity(){
    position[1] += 1;
    if(position[1] >= 30){
        position[1] -= 1;
    }
    DrawPlayer();
}
function DrawPlayer(){
    c.fillStyle = color;
    c.fillRect(position[0]*20, position[1]*20, size, size);
}
function ClearObstacles(){
    Obsticals.forEach(Ob => {
        c.clearRect(Ob[0]*20, Ob[1]*20, Ob[2]*20, Ob[3]*20);  
    });
}
function DrawObstacles(){
    ClearObstacles();
    Obsticals.forEach(Ob => {
        if(Ob[4] == "static"){
            var ObColor = "purple";
        }
        if(Ob[4] == "dynamicx"){
            var ObColor = "blue";
            if(Ob[7] == "up"){
                Ob[0] += 1;
            }
            if(Ob[7] == "down"){
                Ob[0] -= 1;
            }
            if(Ob[0] >= Ob[6]){
                Ob[7] = "down";
            }
            if(Ob[0] <= Ob[5]){
                Ob[7] = "up";
            }
        }
        if(Ob[4] == "dynamicy"){
            var ObColor = "orange";
            Ob[0] += 1;
        }
        c.fillStyle = ObColor;
        c.fillRect(Ob[0]*20, Ob[1]*20, Ob[2]*20, Ob[3]*20);

    });
}
function ErasePlayer(){
    c.clearRect(position[0]*20, position[1]*20, size, size);
}
function Game(){
    ErasePlayer();
    PlayerGravity();
    DrawPlayer();
    DrawObstacles();
}
var interval = setInterval(Game, 60);