window.addEventListener("load", function () {
    var num = 0;
    var prevBtn = this.document.querySelector('.swiper-prev-button');
    var nextBtn = this.document.querySelector('.swiper-next-button');
    var swiper = this.document.querySelectorAll(".swiper-main");
    var container = this.document.querySelector(".container");
    var product = this.document.querySelector('.product-display')
    var header = this.document.querySelector(".header");
    var swiperNum = this.document.querySelector(".swiper-num");
    var flag = false;//定义节流阀
    swiper[0].style.display = 'flex';
    swiper[0].className = "swiper-main swiper-main-active";


    //禁止页面文字被选中
    this.document.addEventListener('selectstart',function(e){
        e.preventDefault();
    })

    nextBtn.addEventListener("click", function () {
        if(flag == false){
            flag = true;
            swiper[num].style.display = 'none';
            swiper[num].className = "swiper-main";
            num++;
            if (num == 4) {
                num = 0;
            }
            changeProducts();
        }
    })
    prevBtn.addEventListener("click", function () {
        if(flag == false){
            flag = true;
            swiper[num].style.display = 'none';
            swiper[num].className = "swiper-main";
            num--;
            if (num == -1) {
                num = 3;
            }
            changeProducts();
        }
    })
    //给轮播图设置节流
    for(let i = 0;i<swiper.length;i++){
        swiper[i].addEventListener('transitionend',function(){
            flag = false;
        })
    }
    function changeProducts() {
        swiper[num].style.display = 'flex';
        // requestAnimationFrame(() => {
        //     swiper[num].className = "swiper-main swiper-main-active"
        // })
        bodystyle = swiper[num].id;
        container.className = "container " + bodystyle;
        header.className = bodystyle;
        swiperNum.innerHTML = (num + 1) + "/4";
        setTimeout(function(){
            swiper[num].className = "swiper-main swiper-main-active";     
        },200)
    }


    //添加移动端手指触摸滑动事件
    var startX = 0;
    var moveX = 0;
    var flag2 = false;
    product.addEventListener('touchstart',function(e){
        startX = e.targetTouches[0].pageX;
    })
    product.addEventListener('touchmove',function(e){
        moveX = e.targetTouches[0].pageX - startX; 
        flag2 = true;
    })
    product.addEventListener('touchend',function(e){
        if(flag2 == true){
            if(Math.abs(moveX) > 100){
                if(moveX>0){
                    prevBtn.click()
                }else{
                    nextBtn.click();
                }
            }
        }

    })
    
})