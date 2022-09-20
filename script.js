$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topbtn').fadeIn();
        } else{
            $('#topbtn').fadeOut();
        }
    })
    $("#topbtn").click(function(){
        $('html, body').animate({scrollTop : 0},800);
    });
});

let tabs = document.querySelectorAll('.tabs-toggle'),
    contents = document.querySelectorAll('.tabs-content');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () =>{
            contents.forEach((content) =>{
                content.classList.remove('is-active');
            });
            tabs.forEach((tab) => {
                tab.classList.remove('is-active');
            });
            contents[index].classList.add('is-active');
            tabs[index].classList.add('is-active');
        });
    });

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0)
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
    },
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


