function setEventHandlers() {
  var buttons = document.querySelectorAll(".drum");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      play(this.innerHTML);
      buttonAnimation(this.innerHTML);
    });
  }

  document.addEventListener("keydown", function (event) {
    play(event.key);
    buttonAnimation(event.key);
  });
}

function play(key) {
  switch (key) {
    case "w":
      new Audio("../../sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("../../sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("../../sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("../../sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("../../sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("../../sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("../../sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(key) {
  var button = document.querySelector("." + key);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

function main() {
  setEventHandlers();
}

main();
