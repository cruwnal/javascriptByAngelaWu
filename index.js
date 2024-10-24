// document.querySelector("button").addEventListener("click",handleClick)
// function handleClick(){
// alert("i am clicked")
// }


//annoymous function 

let nodeListButton = document.querySelectorAll(".drum");
console.log(nodeListButton);
for (let i =0 ; i<nodeListButton.length;i++){

    nodeListButton[i].addEventListener("click",function () {

        
       var audio = new Audio('sounds/tom-1.mp3');
       audio.play();
    })
}
