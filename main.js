alert("Click anywhere on the screen to SpeedUp 🔥");

let background = document.querySelector(".background")

// faster
let faster = function(){
  background.style.animationDuration = "3s";
}

document.addEventListener("click",faster)


//slowing down
setInterval(function(){
  if (background.style.animationDuration == "3s"){
    background.style.animationDuration = "15s"
  }
},4000)