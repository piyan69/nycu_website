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
const anime_container = document.querySelector('.anime_grid_container');
for(let i=1;i<=15;i++){
    let anime_card = document.createElement('div');
    anime_card.classList.add('anime_card'+i);
    anime_container.appendChild(anime_card);
}
let more_anime = document.createElement('div');
more_anime.classList.add('more_anime');
more_anime.style.cursor = "pointer";
more_anime.style.position = "absolute";
more_anime.style.left = "50%";
more_anime.style.top ="100%";
let arrow_down = document.createElement('img');
arrow_down.src = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRA24VpEsfbZ1ifCvYqvBB5xJtZJJkKRM-KoZmrENbaB8hfNAT2";
arrow_down.style.width = "50px";
arrow_down.style.height = "50px";
arrow_down.style.borderRadius = "10px";

more_anime.appendChild(arrow_down);
anime_container.appendChild(more_anime);
arrow_down.addEventListener('click', function() {
    more_anime.style.display = "none";
    // 這裡添加更多的動畫卡片
    for(let i=16;i<=30;i++){
        let anime_card = document.createElement('div');
        anime_card.classList.add('anime_card'+i);
        anime_container.appendChild(anime_card);
    }
    
})


