
var preloader = document.getElementsByClassName("preloader")[0];
window.onload = function () {
setTimeout(function () {
    preloader.style.transition = "opacity 300ms";

    preloader.style.opacity = 0;
    setTimeout(
    function () {
        preloader.style.display = "none";

    }, 400)

}, 1000)
}
var header = document.getElementsByClassName("header")[0];
var offers = document.getElementsByClassName("offer");
window.onscroll = function () {
  if (scrollY > 450) {
    header.classList.add("fixed-bar");

    offers[0].style.animation = "fadeInUp 1.5s forwards"

  }
  else {

    header.classList.remove("fixed-bar");

  }
}
let slid1 = document.getElementsByClassName("slide1");
let slide2 = document.getElementsByClassName("slide2");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

next.addEventListener("click",function(){
  if(slid1[0].classList.contains('active')){
    slid1[0].classList.remove('active');
    slide2[0].classList.add('active');
  }
  else{
    slide2[0].classList.remove('active');
    slid1[0].classList.add('active');
  }
})
prev.addEventListener("click",function(){
  if(slid1[0].classList.contains('active')){
    slid1[0].classList.remove('active');
    slide2[0].classList.add('active');
  
  }
  else{
    slide2[0].classList.remove('active');
    slid1[0].classList.add('active');
  }
})


