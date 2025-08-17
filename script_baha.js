//alert("歡迎大家來到我的弊站(不是b站)")
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
const set_frame = document.querySelector('.set_frame');
set_frame.addEventListener('click', function() {
   const set_menu = document.querySelector('.set_menu');
   set_menu.classList.toggle('visible');

})
const display_mode1 = document.querySelector('.display_mode_option1');
display_mode1.addEventListener('click', function() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  const top_bar = document.querySelector('.top_bar_container');
  top_bar.style.backgroundColor = "white";
  const logo_frame = document.querySelector('.logo_frame');
  logo_frame.style.backgroundColor = "white";
   const hr = document.querySelector('hr');
   hr.style.backgroundColor = "white";
}
)

const display_mode2 = document.querySelector('.display_mode_option2')
display_mode2.addEventListener('click', function() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  const top_bar = document.querySelector('.top_bar_container');
  top_bar.style.backgroundColor = "#2c2c2c";
  const logo_frame = document.querySelector('.logo_frame');
  logo_frame.style.backgroundColor = "#2c2c2c";
  const hr = document.querySelector('hr');

// 確保真的找到了 hr 元素
if (hr) {
  hr.style.border = 'none'; // 移除邊框
  hr.style.height = '1px'; // 設定高度
  hr.style.backgroundColor = "#2c2c2c"; // 現在背景色就生效了！
}
  

}
)
