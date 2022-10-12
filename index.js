console.log("script running")
document.querySelector('.cross').style.display ='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        document.querySelector('.cross').style.display = 'inline'
    }
})

// var card = document.getElementsByClassName("box");
// function myFunction(){
//     var card_flip = this.card;
//     card_flip.classList.toggle("is-flipped");
// }
// card.addEventListener ("Click",myFunction);

// var card= document.querySelector(".box")
// card.addEventListener("click",function(e){
//     card.classList.toggle("is-flipped");
// });

// function func(val){
//     console.log("yes");
//     val.classList.toggle("is-flipped");
// }