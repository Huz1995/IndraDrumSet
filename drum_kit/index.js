

const buttonEventSet = document.querySelectorAll(".drum");

for (let i = 0;i<buttonEventSet.length;i++) {
    buttonEventSet[i].addEventListener("click",function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event) {
    let key = event.key.toUpperCase();
    console.log(event);
    makeSound(key);
    keyAnimate(key);
   
});

function makeSound(key) {
    if (key == " ") {
        key = "Space";
    }
    switch(key){
        case "Q":
            const tom1 = new Audio("./sounds/tom-1.mp3"); 
            tom1.play();
            break;
        case "W":
            const tom3 = new Audio("./sounds/tom-3.mp3"); 
            tom3.play();
            break;
        case "O":
            const tom4 = new Audio("./sounds/tom-4.mp3"); 
            tom4.play();
            break;  
        case "P":
            const tom2 = new Audio("./sounds/tom-2.mp3"); 
            tom2.play();
            break;
        case "D":
            const hiHat = new Audio("./sounds/hi-hat.mp3"); 
            hiHat.play();
            break;
        case "F":
            const crescendo = new Audio("./sounds/crash-crescendo.mp3"); 
            crescendo.play();
            break;     
        case "Space":
            const kick = new Audio("./sounds/kick-bass.mp3"); 
            kick.play();
            break;           
        case "J":
            const crash = new Audio("./sounds/crash.mp3"); 
            crash.play();
            break; 
        case "K":
            const snare = new Audio("./sounds/snare.mp3"); 
            snare.play();
            break;  
    }
    
}

const a = document.querySelector(".w").classList;
console.log(a);
a.add("pressed");
a.remove("pressed");
console.log(a)

function keyAnimate(key) {
    let newKey = key.toLowerCase();
    if (newKey == " ") {
        newKey = "space";
    }
    const clist = document.querySelector("." + newKey).classList;
    clist.add("pressed");

    setTimeout(function () {
        clist.remove("pressed");
    }, 100);

}