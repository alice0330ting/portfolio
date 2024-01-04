// 自己寫的 js
// header、enjoyUs、footer.html 頁面、scroll-top-icon 載入
let header = document.getElementById('header');
axios.get('https://alice0330ting.github.io/portfolio/shop-store/components/header.html').then(function (res) {
    header.innerHTML = res.data;
})
let enjoyUs = document.getElementById('enjoy-us');
axios.get('https://alice0330ting.github.io/portfolio/shop-store/components/enjoy-us.html').then(function (res) {
    enjoyUs.innerHTML = res.data;
})
let footer = document.getElementById('footer');
axios.get('https://alice0330ting.github.io/portfolio/shop-store/components/footer.html').then(function (res) {
    footer.innerHTML = res.data;
})
let scrollTopIcon = document.getElementById('scroll-top-icon');
axios.get('https://alice0330ting.github.io/portfolio/shop-store/components/scroll-top-icon.html').then(function (res) {
    scrollTopIcon.innerHTML = res.data;
})




    // bootstrap 
    // 登入驗證 js
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })();