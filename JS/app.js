let body = document.querySelector(`body`);
let backToTop = document.querySelector(`.backToTop`);

const scrollProgress = (event) => {
  let bodyHeight = body.clientHeight - window.innerHeight;
  let scrollTop = math.round(window.scrollY);
  let percentage = ((100 / bodyHeight) * scrollTop);

  backToTop.style.backgroundImage = `conic-gradient(dodgerblue 0% ${percentage}%, white 0% ${percentage}%`;

}
 window.addEventListener (`scroll`, scrollProgress);

 backToTop.addEventListener(`click`, () =>{
  scroll(
    {
      top:0,
      behavior: "smooth",
    }
  )
 });
$( function(){
 
        $('.bannerSlider').slick({
        arrows: false,
        dots: true,
        dotsClass:"bannerDots container",
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $(".bannerSliderSm").slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
    });

// *BOOSTRAP TOOLTIP
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// *productSlider START
$(".productSlider").slick({
    slidesToShow: 4,
    slideScoroll:4, 
    prevArrow:`<i class="fa-solid fa-chevron-left productSliderArrows"></i> `,
    nextArrow:`<i class="fa-solid fa-chevron-right productSliderArrows"></i> `,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 3000,
     responsive:[
      {
        breakpoint: 1200,
        settings:{
        slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 992,
        settings:{
        slidesToShow: 2,
          
        }
      }
    ]
});

// *FINAL COUNTDOWN TIMER
$('.timer').countdown('2024/03/28', function(event) {
  $(`.days`).html(event.strftime('%D'));
  $(`.hours`).html(event.strftime('%H'));
  $(`.min`).html(event.strftime('%M'));
  $(`.sec`).html(event.strftime('%S'));
});

// *TIMER SLIDER START

$('.timerSlider').slick({
  slidesToShow: 2,
  arrows: false,
  dots: true,
  dotsClass:"timerSliderDots container",
  autoplay: true,
  autoplaySpeed: 2000,
  
});

// *Latest News start
$('.newsSlider').slick({
  slidesToShow: 4,
  arrows: false,
  dots: true,
  dotsClass:"newsSliderDots container",
  autoplay: true,
  autoplaySpeed: 2000,
  
});
$()

});