$(".search").click(function(){
  $("#search_part").slideDown()
})
$(".close").click(function(){
  $("#search_part").slideUp()
})
$(".btt").click(function(){
  $("html,body").animate({
    scrollTop:0
  },100)
})
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".manu").addClass("test")
  }else{
    $(".manu").removeClass("test") 
  }
  if($(window).scrollTop() > 500){
    $(".btt").fadeIn()
  }else{
    $(".btt").fadeOut()
  }
})


$('.venobox').venobox()
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});

$('.service_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,
  dots:false,
  arrows:true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  centerMode:true,
  centerPadding:"0",
  autoplay:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.image_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,
  dots:false,
  arrows:true,
  prevArrow: $('.prev1'),
  nextArrow: $('.next1'),
  centerMode:true,
  centerPadding:"0",
  asNavFor:'.text_slider',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.text_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical:false,
  arrows:false,
  asNavFor:'.image_slider',
  autoplay:true,
});
$('.counter').counterUp({
  delay: 10,
  time: 1100
});
$('.sponser_slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  centerMode:true,
  centerPadding:"0",
  autoplay:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
