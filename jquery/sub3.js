

$(document).ready(function() {

    // ===== 모바일 메뉴 기능 =====
    $('#mn_button_o').on('click', function() {
        $('#mobile_mn').stop().slideDown(300); // 메뉴 슬라이드다운
        $('#mn_button_o').hide(); // #mn_button_o 숨기기
        $('#mn_button_x').show(); // #mn_button_x 보이기
        $('#bg_top_s').css('background', '#FFF'); // 배경색 변경
    });
    
    $('#mn_button_x').on('click', function() {
        $('#mobile_mn').stop().slideUp(300); // 메뉴 슬라이드업
        $('#mn_button_x').hide(); // #mn_button_x 숨기기
        $('#mn_button_o').show(); // #mn_button_o 보이기
        $('#bg_top_s').css('background', ''); // 배경색 원래 상태로 복구
    });


    // ===== 스크롤 시 Top 색상 변경 =====
    const topHeight = $('#top_s').outerHeight(); // #top_s의 높이를 가져옴

    $(window).on('scroll', function() {
        if (window.scrollY >= topHeight) {
            $('#bg_top_s').css('background', 'rgba(255, 255, 255, 0.9)'); // 배경색 변경
        } else {
            $('#bg_top_s').css('background', 'rgba(255, 255, 255, 0)'); // 배경색 원래 상태로 복구
        }
    });

    
    // ===== 그 외 추가 =====

});


// ===== 최상단으로 이동하는 함수 정의 =====
window.scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
