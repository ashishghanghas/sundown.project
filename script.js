var a = document.querySelector(".elem-container")
var b = document.querySelector(".fixed")
a.addEventListener("mouseenter",function(){
    b.style.display="block"
})
a.addEventListener("mouseleave",function(){
    b.style.display="none"
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
    b.style.backgroundImage=`url(${image})`
  })
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 85,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

var animation = document.querySelector(".animation")
setTimeout(function (){
  animation.style.top="-100%"
},4000)
