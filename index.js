// document.querySelector("button").addEventListener("click",handleClick)
// function handleClick(){
// alert("i am clicked")
// }


//annoymous function 

let nodeListButton = document.querySelectorAll("button");

for (let i =0 ; i<nodeListButton.length;i++){

    nodeListButton[i].addEventListener("click",function () {
        alert("button got clicked")
    })
}
