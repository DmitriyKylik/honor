import 'slick-carousel';

$(function() {

  /*----------Slick slider options--------------*/

  $('.invite_slider').slick({
    speed:250,
    slidesToShow:3,
    slidesToScroll:3,
    rows:0,
    arrows:false,
    dots:true,
  });

  $('.what-we-do_slider').slick({
    speed:250,
    slidesToShow:1,
    slidesToScroll:1,
    prevArrow: $('.slider-nav_prev-button'),
    nextArrow: $('.slider-nav_next-button')
  });


  /*----------Slick slider options END--------------*/

});

/*----------LOVE CLIENT SECTION VIDEO PLAYING SETTINGS START--------------*/

var vid =  document.getElementById('clients_video');
var button = document.getElementsByClassName('video_button-icon')[0];
var back_title = document.getElementsByClassName('clients_back-title')[0];
var header = document.getElementsByClassName('clients_header')[0];
var frame = document.getElementsByClassName('honor-for-details_titles-container')[0];

function videoPlay() {

  vid.play();
}

function videoPause() {

  vid.pause();
}

button.addEventListener('click',function() {

  videoPlay();
  button.style.display = 'none';
  back_title.style.display = 'none';
  header.style.display = 'none';
  frame.style.height = 336 + 'px';	
});

vid.addEventListener('click',function() {
  videoPause();
  this.load();
  this.style.zIndex = 1; 
  button.style.display = '';
  back_title.style.display = '';
  header.style.display = '';
  frame.style.height = 700 + 'px';	
},false);

/*----------LOVE CLIENT SECTION VIDEO PLAYING SETTINGS END--------------*/
