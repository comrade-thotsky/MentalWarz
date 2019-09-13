let canvas = document.getElementById("gameScreen");
let c = canvas.getContext("2d");
var size = 50;
var x = 0;
var y = 600-size;
var color = "red";
var jump = false;
var left = false;
var right = false;
document.addEventListener("keydown", function(event){
    console.log(event.which);
    // w
    if(event.which == 87){
        if(jump == false){
            c.clearRect(x,y,size,size);
            c.fillStyle = color;
            y -= 100;
            if(y <= 0){
                y = 0;
            }
            c.fillRect(x,y,size,size);
            jump = true;
        }
    }
    //a
    if(event.which == 65){
        left = true;
        right = false;
        c.clearRect(x,y,size,size);
        c.fillStyle = color;
        x -= 20;
        if(x <= 0){
            x = 0;
        }
        c.fillRect(x,y,size,size);
    }
    //d
    if(event.which == 68){
        left = false;
        right = true;
        c.clearRect(x,y,size,size);
        c.fillStyle = color;
        x += 20;
        if(x >= 800 - size){
            x = 800 - size;
        }
        c.fillRect(x,y,size,size);
    }
    //space
    if(event.which == 32){
        if(jump == false){
            c.clearRect(x,y,size,size);
            c.fillStyle = color;
            y -= 100;
            if(y <= 0){
                y = 0;
            }
            c.fillRect(x,y,size,size);
            jump = true;
            if(left == true){
                x -= 20;
                if(x <= 0){
                    x = 0;
                }
                c.fillRect(x,y,size,size);
            }
            if(right == true){
                x += 20;
                if(x <= 800-size){
                    x = 800-size;
                }
                c.fillRect(x,y,size,size);
            }
        }
    }
})
function PlayerGravity(){
    y += 20;
    if(y >= 600-size){
        y = 600-size;
        jump = false;
    }
}
function DrawPlayer(){
    c.fillStyle = color;
    c.fillRect(x,y,size,size);
}
function Game(){
    c.clearRect(x,y,size,size);
    PlayerGravity();
    c.clearRect(x,y,size,size);
    DrawPlayer();
}
var interval = setInterval(Game, 75);