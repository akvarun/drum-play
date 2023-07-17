//for button detection
var lengthButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < lengthButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        animateButton(buttonInnerHtml);
    });
}
//for keystrokes
document.addEventListener("keypress", function (event) {
    var whichKey = event.key;
    makeSound(whichKey);
    animateButton(whichKey);
});

function makeSound(key) {
    switch (key) {

        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        default:
            break;
    }

}

function animateButton(key){
    buttonPressed = document.querySelector("."+key);
    buttonPressed.classList.add("pressed");

    setTimeout(() => {
        buttonPressed.classList.remove("pressed");
    }, 100);
}