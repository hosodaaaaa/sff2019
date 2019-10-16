// clickEvent
(function hum() {
  const clickPoint = document.querySelectorAll(".gHamburger");
  const moveHeader = document.querySelectorAll(".gHeader");
  let jude = false;
  clickPoint.forEach(clickItem => {
    clickItem.addEventListener("click", () => {
      clickItem.classList.toggle("click");
      moveHeader.forEach(move => {
        if (!jude) {
          jude = true;
          move.classList.add("open");
          move.classList.remove("close");
        } else {
          jude = false;
          move.classList.remove("open");
          move.classList.add("close");
        }
      });
    });
  });
})();

// scrollEvent
// (function fadeItem() {
//   fadePoint.addEventListener("scroll", () => {
//     const fadeObj = document.querySelectorAll(".homeBox");
//     const heigh = fadeObj.getBoundingClientRect();
//     const scrollTop =
//       window.pageYOffset || document.documentElement.scrollTop();
//     const pageTop = heigh.top + scrollTop;
//     const currentScroll = window.scrollY;
//     const winHeight = window.innerHeight;
//   });
// })();

$(function() {
  $(window).scroll(function() {
    $(".homeBox, .aboutBox, .eventBox, .contestBox, .aboutSubBox").each(
      function() {
        const imgPos = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight / 5) {
          $(this).addClass("fadeOn");
        } else {
          $(this).removeClass("fadeOn");
        }
      }
    );
  });
});

// スライダー
$(".sliderBoxInner").slick({
  slidesToShow: 5,
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0, //待ち時間を０に
  speed: 10000, // スピードをゆっくり
  swipe: false, // 操作による切り替えはさせない
  cssEase: "linear", // 切り替えイージングを'linear'に
  // 以下、操作後に止まってしまう仕様の対策
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,

  // 以下、レスポンシブ
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});
