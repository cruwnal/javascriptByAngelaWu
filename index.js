

var deveLoperProperty={
    name:'kunal nagwanshi',
    age:'27',
    comapny:'Quantum power system',
    post: 'software engineer',
    hobby :['gym','running','playing badminton'],
    coding : function (){
        alert('can i solve the real world problem sir');
        communicationSkills();
    }

}


function  communicationSkills(){

    alert('i can speak english and hindi');
}

//constructir function 

function employess(name,age,comapny,post,hobby){
this.name=name;
this.age=age;
this.comapny=comapny;
this.post=post;
this.hobby=hobby;

}




//intializing the object 

var employee1 = new employess('naveen',27,'qps','software engineer',['watching cricket','playing football']);
console.log(employee1.name);
console.log(deveLoperProperty.age+"   "+deveLoperProperty.hobby);
let nodeListButton = document.querySelectorAll(".drum");
console.log(nodeListButton);
for (let i =0 ; i<nodeListButton.length;i++){

    nodeListButton[i].addEventListener("click",function () {
     var buttonClick = this.innerHTML;
      var playedMusic ='';
        switch(buttonClick){
            case'w':playedMusic='sounds/tom-1.mp3';
            break;
            case 'a':playedMusic='sounds/tom-2.mp3'
            break;
            case 's':playedMusic='sounds/tom-3.mp3'
            break;
            case 'd':playedMusic='sounds/tom-4.mp3'
            break;
            case 'j':playedMusic='sounds/snare.mp3'
            break;
            case 'k':playedMusic='sounds/kick-bass.mp3'
            break;   
            case 'l':playedMusic='sounds/crash.mp3'
            break;                 
           
        }


        
       var audio = new Audio(playedMusic);
       audio.play();
    })
}


document.addEventListener('keydown',function(e){
    var playedMusic ='';
  var keyPressed = e.key;
   switch (keyPressed){
    case'w':playedMusic='sounds/tom-1.mp3';
    break;
    case 'a':playedMusic='sounds/tom-2.mp3'
    break;
    case 's':playedMusic='sounds/tom-3.mp3'
    break;
    case 'd':playedMusic='sounds/tom-4.mp3'
    break;
    case 'j':playedMusic='sounds/snare.mp3'
    break;
    case 'k':playedMusic='sounds/kick-bass.mp3'
    break;   
    case 'l':playedMusic='sounds/crash.mp3'
    break; 
    default : console.log('wron key press');                     

   }
   var audio = new Audio(playedMusic);
       audio.play();
})