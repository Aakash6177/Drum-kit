

for(let i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    console.log(this.innerText);
    let letter = this.innerText;
    switch(letter){

      case 'w':
        let audio1 = new Audio("./sounds/tom-1.mp3");
        audio1.play();
        break;

      case 'a':
        let audio2 = new Audio("./sounds/tom-2.mp3");
        audio2.play();
        break;

      case 's':
        let audio3 = new Audio("./sounds/tom-3.mp3");
        audio3.play();
        break;

      case 'd':
        let audio4 = new Audio("./sounds/tom-4.mp3");
        audio4.play();
        break;

      case  'j':
        let audio5 = new Audio("./sounds/snare.mp3");
        audio5.play();
        break;

      case 'k':
        let audio6 = new Audio("./sounds/kick-bass.mp3");
        audio6.play();
        break;

      case 'l':
        let audio7 = new Audio("./sounds/crash.mp3");
        audio7.play();
        break;

      default:

    }

  });
}
 function keyStroke(char){

 }

// document.addEventListener("keydown", function(event){
//   alert("key was pressed");
// });
// let result = this.innerHTML;

// if(result === 'w'){
//   let audio = new Audio("./sounds/tom-1.mp3");
//   audio.play();
// }

// else if(result === 'a'){
//   let audio = new Audio("./sounds/tom-2.mp3");
//   audio.play();
// }
// else if(result === 's'){
//   let audio = new Audio("./sounds/tom-3.mp3");
//   audio.play();
// }
// else if(result === 'd'){
//   let audio = new Audio("./sounds/tom-4.mp3");
//   audio.play();
// }
// else if(result === 'j'){
//   let audio = new Audio("./sounds/snare.mp3");
//   audio.play();
// }
// else if(result === 'k'){
//   let audio = new Audio("./sounds/kick.mp3");
//   audio.play();
// }
// else if(result === 'j'){
//   let audio = new Audio("./sounds/crash.mp3");
//   audio.play();
