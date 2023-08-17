const hole = document.getElementById("hole");
let result = document.getElementById("result");
let text = document.getElementById("text");
let game = document.getElementById("game");
let jumping = 0;
let score = 0;

////animation////
hole.addEventListener("animationiteration", hol)

function hol() {
    let random = -((Math.random() * 350) + 150)
    hole.style.top = random + "px"
    score++;
}

////fall and game over////
let fall = setInterval(function(){
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0){bird.style.top = (birdTop + 2) + "px";}

    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
    let hTop = (500 + holeTop);
    if((birdTop > 450) || ((blockleft<50)&& (blockleft > -50) && ((birdTop < hTop) || (birdTop > hTop + 100)))){
        result.style.display = "block"
        text.innerText = `score :${score}`;
        game.style.display = "none"
        score = 0;
    }
},10)

////jump////
function jump(){
    // jumping = 1;

    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(birdTop > 6){bird.style.top = (birdTop - 60) + "px"}

    setTimeout (function(){
        jumpig = 0
    },100)
}
window.addEventListener("keydown",jump)