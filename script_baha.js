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
    hr.style.height = '0px'; // 設定高度
    hr.style.backgroundColor = "#2c2c2c"; // 現在背景色就生效了！
  }
  
}
)
const anime_container = document.querySelector('.anime_grid_container');
let anime_url=[
    "https://ani.gamer.com.tw/animeVideo.php?sn=36632",
    "https://ani.gamer.com.tw/animeVideo.php?sn=44054",
    "https://ani.gamer.com.tw/animeVideo.php?sn=19849",
    "https://ani.gamer.com.tw/animeVideo.php?sn=26709",
    "https://ani.gamer.com.tw/animeVideo.php?sn=43965",
    "https://ani.gamer.com.tw/animeVideo.php?sn=18626",
    "https://ani.gamer.com.tw/animeVideo.php?sn=31670",
    "https://ani.gamer.com.tw/animeVideo.php?sn=20620",
    "https://anime1.cc/681863497/",
    "https://ani.gamer.com.tw/animeVideo.php?sn=29213",
    "https://ani.gamer.com.tw/animeVideo.php?sn=41645",
    "https://ani.gamer.com.tw/animeVideo.php?sn=40132",
    "https://anime1.in/2014-wang-xiang-xue-sheng-hui-di-er-ji/",
    "https://ani.gamer.com.tw/animeVideo.php?sn=27362",
    "https://ani.gamer.com.tw/animeVideo.php?sn=12016",
    "https://ani.gamer.com.tw/animeVideo.php?sn=28879",
    "https://ani.gamer.com.tw/animeVideo.php?sn=34090",
    "https://tv.apple.com/tw/show/%E5%A4%A9%E5%85%B5%E5%85%AC%E5%9C%92/umc.cmc.2fafy2w7b0fkcnbadq9guk3gc",
    "https://ani.gamer.com.tw/animeVideo.php?sn=20530",
    "https://anime1.me/category/2019%E5%B9%B4%E5%A4%8F%E5%AD%A3/%E5%8F%AA%E8%A6%81%E9%95%B7%E5%BE%97%E5%8F%AF%E6%84%9B",
    "https://ani.gamer.com.tw/animeVideo.php?sn=31622",
    "https://ani.gamer.com.tw/animeVideo.php?sn=11177",
    "https://ani.gamer.com.tw/animeVideo.php?sn=38709",
    "https://ani.gamer.com.tw/animeVideo.php?sn=30021",
    "https://ani.gamer.com.tw/animeVideo.php?sn=16402",
    "https://anime1.me/category/2021%e5%b9%b4%e5%86%ac%e5%ad%a3/%e5%9b%9e%e5%be%a9%e8%a1%93%e5%a3%ab%e7%9a%84%e9%87%8d%e5%95%9f%e4%ba%ba%e7%94%9f",
    "https://ani.gamer.com.tw/animeVideo.php?sn=41686",
    "https://anime1.me/category/2025%e5%b9%b4%e5%86%ac%e5%ad%a3/sakamoto-days-%e5%9d%82%e6%9c%ac%e6%97%a5%e5%b8%b8",
    "https://ani.gamer.com.tw/animeVideo.php?sn=32340",
    "https://ani.gamer.com.tw/animeVideo.php?sn=4451"
  ];
for(let i=1;i<=30;i++){
    let anime_card = document.createElement('div');
    anime_card.classList.add('anime_card'+i);
    anime_card.id ="anime"+i;
    anime_card.classList.add('touch_effect');
    anime_card.style.cursor = "pointer";
    anime_card.addEventListener('click', function() {
        alert("這是動畫卡片"+i+"的點擊事件");
        // 這裡可以添加更多的功能，比如跳轉到動畫詳情頁面
        window.location.href = anime_url[i-1]; // 假設有一個動畫
    })
    anime_container.appendChild(anime_card);
}
for(let i=16;i<=30;i++){
    const anime_card = document.querySelector('.anime_card'+i);
    anime_card.style.display = "none"; // 初始隱藏第16到30張卡片

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
      const anime_card = document.querySelector('.anime_card'+i); 
      anime_card.style.display = "block"; // 初始隱藏第16到30張卡片
    }
    
})
// 搜尋功能
const search_input = document.querySelector('.anime_name');
if(!search_input){
  console.error("搜尋輸入框未找到");
}
else{
  console.log("搜尋輸入框已找到");

  search_input.addEventListener('change', function(){   //change 事件在輸入框失去焦點時觸發 input 事件在輸入框內容改變時觸發
    const input = search_input.value.toLowerCase();
    if(input === ""){
       console.log("輸入框為空，請輸入動畫名稱");
    }
    else if(input === undefined){
       console.error("輸入框值為 undefined，請檢查輸入框");
    }
    else{
        console.log("輸入的動畫名稱為: " + input);
        const anime_cards = document.querySelectorAll('.anime_grid_container > div');
    
        anime_cards.forEach(function(card){
            if( card.id.toLowerCase()== input  ){
                let text = card.id.toLowerCase();
                console.log(text);
                console.log("找到匹配的動畫卡片: " + card.id);
                const numberString = text.replace(/\D/g, ''); // 結果會是字串 "1"

                // 因為結果是字串，通常需要轉換成數字
                const number = parseInt(numberString, 10);    //10是10進位的意思         
                console.log(number);       // 輸出: 1   (數字類型)
                
                window.location.href = anime_url[number-1]; // 假設有一個動畫




            }
        

        })
    }
    
  })
}
async function changeLanguage(lang){
   const non_json_response= await fetch(`./translations/${lang}.json`);
   const json_response = await non_json_response.json();
   const global_elements = document.querySelectorAll('[data-translate]');
   global_elements.forEach(element =>{
      const key = element.getAttribute('data-translate');
      const data = json_response[key];
      if(data){
        if(element.tagName ==='INPUT' && element.placeholder){
          element.placeholder = data;
        }
        else{
          element.textContent = data; // 更新元素的文字內容
        }

      }
      else{
        console.error(`找不到鍵值 ${key} 的翻譯`);
      }

   })


}
// 語言切換功能
const lang_selector = document.querySelector('.lang_selector');
lang_selector.addEventListener("change",function(){
  const selected_lang = lang_selector.value;
  console.log("選擇的語言是: " + selected_lang);
  changeLanguage(selected_lang);



})
