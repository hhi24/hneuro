
// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000, // 3초마다 슬라이드 전환
      disableOnInteraction: false, // 사용자가 슬라이드를 클릭해도 자동 전환 유지
    },
    fadeEffect: { // 페이드 전환 시 부드러운 효과를 위한 설정
      crossFade: true,
    },
    speed: 1000, // 페이드 속도 1초 (1000ms)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



$(document).ready(function() {

// Mobile Menu
  // #mn_button_o 클릭 이벤트
  $('#mn_button_o').on('click', function() {
      $('#mobile_mn').stop().slideDown(300); // 메뉴 슬라이드다운
      $('#mn_button_o').hide(); // #mn_button_o 숨기기
      $('#mn_button_x').show(); // #mn_button_x 보이기
  });
  
  // #mn_button_x 클릭 이벤트
  $('#mn_button_x').on('click', function() {
      $('#mobile_mn').stop().slideUp(300); // 메뉴 슬라이드업
      $('#mn_button_x').hide(); // #mn_button_x 숨기기
      $('#mn_button_o').show(); // #mn_button_o 보이기
  });
  

// MAP
  new daum.roughmap.Lander({
    "timestamp" : "1731906918412",
    "key" : "2m9jq",
    "mapWidth" : "100%",
    "mapHeight" : "100%"
  }).render();
  
});
