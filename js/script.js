$(document).ready(function(){
  
  $(".slider").slick({
    autoplay: true ,
    autoplaySpeed: 1000 ,
    arrows: false ,
    dots: true ,
    pauseOnHover: true ,
    slidesToShow: 1 ,
    slidesToScroll: 1, 
    speed: 300 ,
  });
  
  $(".event-list").slick({
    dots: true,
  });
  
  $(".top-bar-wrap>.top-bar>.menu").mouseover(function(){
    $(".nav-wrap").addClass("active");
  });
 
  $(".top-bar-wrap>.top-bar>.menu").mouseleave(function(){
    $(".nav-wrap").removeClass("active");
  });

});