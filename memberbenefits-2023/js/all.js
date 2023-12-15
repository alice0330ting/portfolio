$(document).ready(function () {
   $('.showmenu').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('menu-show');
   });
});


// 會員權益詳細說明，點擊打開
$(function () {
   $(".project-title_1").click(function () {
      $(".project-text_1").slideToggle("slow");
      $(".project-text_2").toggle(false);
      $(".project-text_3").toggle(false);
      $(".project-text_4").toggle(false);
   });
});
$(function () {
   $(".project-title_2").click(function () {
      $(".project-text_2").slideToggle("slow");
      $(".project-text_1").toggle(false);
      $(".project-text_3").toggle(false);
      $(".project-text_4").toggle(false);
   });
});
$(function () {
   $(".project-title_3").click(function () {
      $(".project-text_3").slideToggle("slow");
      $(".project-text_1").toggle(false);
      $(".project-text_2").toggle(false);
      $(".project-text_4").toggle(false);
   });
});


$(function () {
   $(".project-title_4").click(function () {
      $(".project-text_4").slideToggle("slow");
      $(".project-text_1").toggle(false);
      $(".project-text_2").toggle(false);
      $(".project-text_3").toggle(false);
   });
});




// 點擊第二層menu下面說明文字打開 

$(function () {
   $("#menu-1").click(function () {
      $(".project-text_1").slideDown("slow").scrollTop(300);
      $(".project-text_2").toggle(false);
      $(".project-text_3").toggle(false);
      $(".project-text_4").toggle(false);
   });
});
$(function () {
   $("#menu-2").click(function () {
      $(".project-text_2").slideDown("slow");
      $(".project-text_1").toggle(false);
      $(".project-text_3").toggle(false);
      $(".project-text_4").toggle(false);
   });
});
$(function () {
   $("#menu-3").click(function () {
      $(".project-text_3").slideDown("slow");
      $(".project-text_1").toggle(false);
      $(".project-text_2").toggle(false);
      $(".project-text_4").toggle(false);
   });
});

$(function () {
   $("#menu-4").click(function () {
      $(".project-text_4").slideDown("slow");
      $(".project-text_1").toggle(false);
      $(".project-text_2").toggle(false);
      $(".project-text_3").toggle(false);
   });
});



// 點擊 會員福利的「點數使用規則」，跳到下方使用說明
$(function () {
   $(".points").click(function () {
      $(".project-text_3").slideDown("slow");
      $(".xs1").toggle();
      $(".xs2").toggle();
   });
});

