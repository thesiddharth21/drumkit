$("button").click(handleClick);
function handleClick(){
  var buttonName = this.innerHTML;
  makeSound(buttonName);
  setAnimation(buttonName);
}

$("button").keydown(keyInput);
function keyInput(event){
  var keyEvent = event.key;
  makeSound(keyEvent);
  setAnimation(keyEvent);
}

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}


function setAnimation(currentButton){
  var activeButton = $("." +currentButton);
  activeButton.addClass("pressed");

  setTimeout(function(){
    activeButton.removeClass("pressed");
  });
}
