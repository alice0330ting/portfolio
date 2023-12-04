// 卷軸滾動到指定位置，顯示menu
function menuOnScrollFunction() {
    let windowTop = window.scrollY + window.innerHeight / 3; // 視窗頂部位置 = window.scrollY 目前文件垂直捲動的像素位置 + window.innerHeight 視窗的內部高度的三分之一
    const menu = document.getElementById("menu");
    const picAbout = document.getElementById("pic-about");
    const menuLogo = document.getElementById("menu-logo");

    if (picAbout.offsetTop < windowTop) { // 判斷 picAbout.offsetTop 的目前元素位置 < windowTop 視窗頂部位置
        menu.classList.add("open-menu"); // menu.classList.add 新增 class
        menuLogo.classList.add("animate__animated", "animate__fadeInDown");
    } else {
        menu.classList.remove("open-menu");
        menuLogo.classList.remove("animate__animated", "animate__fadeInDown");

    }
};


// 卷軸滾動到圖片位置，執行顯示動畫
window.addEventListener("scroll", function () { // 監聽 window，當 scroll 捲動時執行 function
    let windowBottom = window.scrollY + window.innerHeight; // 視窗最底 = window.scrollY 目前文件垂直捲動的像素位置 + window.innerHeight 視窗的內部高度
    const picAbout = document.getElementById("pic-about");
    const picFarmer = document.getElementById("pic-farmer");
    const picStore = document.getElementById("pic-store");
    const textAbout = document.getElementById("text-about");
    const textFarmer = document.getElementById("text-farmer");
    const textStore = document.getElementById("text-store");
    const varieties = document.getElementById("varieties");
    const reservationContainer = document.getElementById("reservation-container");



    // 柿子園介紹
    if (picAbout.offsetTop < windowBottom) { // 判斷 picAbout.offsetTop 的目前元素位置 < windowBottom 視窗最底
        picAbout.classList.add("opacity-100", "animate__animated", "animate__fadeInLeft", "animate__slow"); // picAbout.classList.add 新增 class
        textAbout.classList.add("fadeIn-slow", "animate__animated", "animate__fadeIn");
    } else {
        picAbout.classList.remove("opacity-100", "animate__animated", "animate__fadeInLeft", "animate__slow");
        textAbout.classList.remove("fadeIn-slow", "animate__animated", "animate__fadeIn");
    }

    // 園主介紹
    if (picFarmer.offsetTop < windowBottom) {
        picFarmer.classList.add("opacity-100", "animate__animated", "animate__fadeInLeft", "animate__slow");
        textFarmer.classList.add("fadeIn-slow", "animate__animated", "animate__fadeIn");
    } else {
        picFarmer.classList.remove("opacity-100", "animate__animated", "animate__fadeInLeft", "animate__slow");
        textFarmer.classList.remove("fadeIn-slow", "animate__animated", "animate__fadeIn");
    }

    // 直銷商店
    if (picStore.offsetTop < windowBottom) {
        picStore.classList.add("opacity-100", "animate__animated", "animate__fadeInRight", "animate__slow");
        textStore.classList.add("fadeIn-slow", "animate__animated", "animate__fadeIn");
    } else {
        picStore.classList.remove("opacity-100", "animate__animated", "animate__fadeInRight", "animate__slow");
        textStore.classList.remove("fadeIn-slow", "animate__animated", "animate__fadeIn");
    }

    // 柿子品種
    if (varieties.offsetTop < windowBottom) {
        varieties.classList.add("animation-fadeIn");
    } else {
        varieties.classList.remove("animation-fadeIn");
    }

});


// Offcanvas 點錨點連結，關閉 Offcanvas
document.addEventListener("DOMContentLoaded", function () {
    /* hide offCanvasMenu when clicking a link */
    var myOffcanvas = document.getElementById("offcanvasNavbar");
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);  // 建構子函數 New，透過 function 的方式來建立一個新的物件(同屬性名稱但不同屬性值的物件內容)，在 bootstrap.Offcanvas 內建立 myOffcanvas 的屬性值
    var menuLinks = document.querySelectorAll(".offcanvas-body .nav-link");  // 取得錨點
    for (var i = 0; i < menuLinks.length; i++) {  // 設定變數 i 初始值=0；限制值為 menuLinks.length 數目； i++ 是每次直行完迴圈都 +1 ，因此迴圈從 0 開始顯示，一直顯示到 2 為止，
        menuLinks[i].addEventListener("click", function (event) {  // 監聽 menuLinks 的每個陣列，當點滑鼠擊時
            bsOffcanvas.hide();  // bsOffcanvas 物件執行隱藏
        });
    }
});

