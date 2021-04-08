// alert("test");

const swiper = new Swiper('.swiper-container', {
  // Optional parameters 
  // direction: 'vertical', ←縦方向のスライダーの時（ほとんど使わない）
  loop: true, //スライダーが最後までいった時
  // If we need pagination
  pagination: {
    el: '.swiper-pagination', //クラス名をあてる
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //ページネーションがあるので、スクロールバーはあまり使わない
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

new WOW().init();

jQuery('.dro-icon').on('click',function(e){
  e.preventDefault();
  // alert('click');
  jQuery('.dro-icon').toggleClass('is-active2');
  jQuery('.dro-content').toggleClass('is-active2');
  jQuery('.dro-background').toggleClass('is-active2');
  return false;
});

jQuery('a[href^="#"]').on('click',function(){
  // alert('click');
  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id !="#"){
    var position = jQuery(id).offset().top - header ;
  }

  console.log(id);
  console.log(position);

  jQuery('html,body').animate({
    scrollTop:position
  },
  300);
});

jQuery(window).on('scroll',function(){
  if(100 < jQuery(this).scrollTop()){
    jQuery('.to-top').addClass('is-show');
  }else{
    jQuery('.to-top').removeClass('is-show');
  }
});
jQuery('.header__nav li a').on('click',function(){
  jQuery('.header__nav li a').removeClass('.is-active');
  jQuery(this).addClass('is-active');
  return false;
});

jQuery('.qa__box__q').on('click',function(){
  // alert('click');
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa__box__icon').toggleClass('is-open');
});

jQuery('.js-close-button').click(function(e) {
  e.preventDefault();
  var target = jQuery(this).data("target");
  jQuery(target).hide();
  return false;
});
jQuery('.js-open-button').click(function(e) {
  e.preventDefault();
  var target = jQuery(this).data("target");
  jQuery(target).show();
  return false;
});