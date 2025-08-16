let noti_over = function(elem) {
  elem.style.opacity = 0.5;
  elem.style.cursor = "pointer";
  const num = document.querySelector('#noti_number')
  num.style.display = "none";
  
}

let noti_out = function(elem) {
  elem.style.opacity = 1;
   const num = document.querySelector('#noti_number')
   num.style.display = "inline";
}
let subscribe_over = function(elem) {
  elem.style.opacity = 0.5;
  elem.style.cursor = "pointer";
  const num = document.querySelector('.subscribe_number')
  num.style.display = "none";
  
}
let subscribe_out = function(elem) {
  elem.style.opacity = 1;
   const num = document.querySelector('.subscribe_number')
   num.style.display = "inline";
}
const notification = document.querySelector('.noti_frame')
notification.addEventListener("mouseover",
  function(){
      notification.classList.toggle("visible");

  }
)