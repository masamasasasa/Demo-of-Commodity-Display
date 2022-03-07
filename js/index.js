window.addEventListener("load", function () {
    var num = 0;
    var prevBtn = this.document.querySelector('.swiper-prev-button');
    var nextBtn = this.document.querySelector('.swiper-next-button');
    var swiper = this.document.querySelectorAll(".swiper-main");
    var container = this.document.querySelector(".container");
    var header = this.document.querySelector("header");
    var swiperNum = this.document.querySelector(".swiper-num");
    swiper[0].style.display = 'flex';
    swiper[0].className = "swiper-main swiper-main-active";
    nextBtn.addEventListener("click", function () {
        swiper[num].style.display = 'none';
        swiper[num].className = "swiper-main";
        num++;
        if (num == 4) {
            num = 0;
        }
        changeProducts();
    })
    prevBtn.addEventListener("click", function () {
        swiper[num].style.display = 'none';
        swiper[num].className = "swiper-main";
        num--;
        if (num == -1) {
            num = 3;
        }
        changeProducts();
    })

    function changeProducts() {
        swiper[num].style.display = 'flex';
        // swiper[num].className = "swiper-main";
        requestAnimationFrame(() => {
            swiper[num].className = "swiper-main swiper-main-active"
        })
        bodystyle = swiper[num].id;
        container.className = "container " + bodystyle;
        header.className = bodystyle;
        swiperNum.innerHTML = (num + 1) + "/4";

    }
})