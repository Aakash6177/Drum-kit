
function check(event){
  return event.key;
}

 document.addEventListener('keydown',()=>{
   let key = check(event);
   switch(key){
     case 'w':
      let audio1 = new Audio('./sounds/tom-1.mp3');
      audio1.play();
      console.log(check(event));
      buttonAnimation(key);
      break;
    case 'a' :
      let audio2 = new Audio('./sounds/tom-2.mp3');
      audio2.play();
      console.log(check(event));
      buttonAnimation(key);
      break;

    case 's':
      let audio3 = new Audio('./sounds/tom-3.mp3');
      audio3.play();
      console.log(check(event));
      buttonAnimation(key);
      break;

    case 'd':
      let audio4 = new Audio('./sounds/tom-4.mp3');
      audio4.play();
      console.log(check(event));
      buttonAnimation(key);
      break;

    case 'j':
      let audio5 = new Audio('./sounds/snare.mp3');
      audio5.play();
      console.log(check(event));
      buttonAnimation(key);
      break;

    case 'k':
      let audio6 = new Audio('./sounds/kick-bass.mp3');
      audio6.play();
      console.log(check(event));
      buttonAnimation(key);
      break;

    case 'l':
      let audio7 = new Audio('./sounds/crash.mp3');
      audio7.play();
      console.log(check(event));
      buttonAnimation(key);
      break;

    default:
      console.log(check(event));
   }

})


function buttonAnimation(Key){
  let activeButton = document.querySelector("."+key);
  console.log(activeButton);
  // activeButton.classList.add("pressed");
}
