numberOfButtons = document.querySelectorAll(".drum").length

for (let i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  let buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml)
  buttonAnimation(buttonInnerHtml)
    }) 
  }  


document.addEventListener("keypress", (event) => {
   makeSound(event.key)
   buttonAnimation(event.key)


})

function buttonAnimation(keyPresed) {
    document.querySelector("."+keyPresed).classList.add("pressed")
    setTimeout( function () {
    document.querySelector("."+keyPresed).classList.remove("pressed")
        },100)
}

function makeSound(key) {

    switch (key) {
        case "w":
            let audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
            
       default:
            break;
        case "a":
            let tom2Audio = new Audio("./sounds/tom-2.mp3");
            tom2Audio.play();
            break;
       
        case "s":
            let tom3Audio = new Audio("./sounds/tom-3.mp3");
            tom3Audio.play();
            break;
        case "d":
            let tom4Audio = new Audio("./sounds/tom-4.mp3");
            tom4Audio.play();
            break;
       
        case "j":
            let snareAudio = new Audio("./sounds/snare.mp3");
            snareAudio.play();
            break;
       
        case "k":
            let crashAudio = new Audio("./sounds/crash.mp3");
        crashAudio.play();
            break;
       
        case "l":
            let kickAudio = new Audio("./sounds/kick-bass.mp3");
            kickAudio.play();
            break;
       
       
        }
}



// function HouseKepeer(name ,age , isAlredyInWork, languanges, clean) {
//     this.name= name;
//     this.age = age;
//     this.isAlredyInWork= isAlredyInWork;
//     this.languanges = languanges;
//     this.clean = function  clean(){
//         alert("clean in progres")
//     }
// }

// let monda =  new HouseKepeer("monda",56, true ,["anglisht","spanjisht"]);
// let gena =  new HouseKepeer("gena",52, true ,["anglisht",""]);
// let arditi =  new HouseKepeer("arditi",53, true ,["","spanjisht"]);

// console.log(monda.clean);







// document.querySelector(".drum").addEventListener("click", function () {
//     let crashAudio = new Audio("./sounds/crash.mp3");
//     crashAudio.play();
//     console.log(this.innerHTML);
// })
// function add(num1 ,num2) {
//     return num1+ num2
// }
// function sbustract(num1 ,num2) {
//     return num1- num2
// }
// function devide(num1 ,num2) {
//     return num1/ num2
// }
// function multiply(num1 ,num2) {
//     return num1* num2
// }

// function calculator ( num1, num2, operation){
//     console.log(operation(num1 ,num2 ,operation));
//     return operation(num1 ,num2 ,operation)
// }

// debugger;
// calculator(2,5,add)
// calculator(2,5,sbustract)
// calculator(10,5,devide)
// calculator(2,5,multiply)



