let  food = { x: -11, y: -3 }
var carbody = null;
function init() {
    carbody = document.getElementById("carbody");
    carbody.style.right = "480px";


}
function getKeyAndMove(e) {
    console.log(e.key)
    switch (e.key) {
        case 'ArrowLeft': 
        moveLeft();
            break;

        case 'ArrowRight': 
        moveRight();
            break;

    }
}
function moveRight() {
    if(parseInt( carbody.style.right)>320 && parseInt (carbody.style.right)<796){
    carbody.style.right = parseInt(carbody.style.right) - 5 + "px";
    }
    else{
        carbody.style.right = parseInt(carbody.style.right) + 10+ "px";
        
    }
}

function moveLeft() {
    if(parseInt( carbody.style.right)>320 && parseInt (carbody.style.right)<796){
        carbody.style.right = parseInt(carbody.style.right) + 5 + "px";
        }
        else{
            carbody.style.right = parseInt(carbody.style.right) -10+ "px";
        }
}

window.onload = init;


