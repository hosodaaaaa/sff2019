// clickEvent
(function hum() {
  const clickPoint = document.querySelectorAll(".gHamburger");
  const fixItem = document.querySelectorAll("body");
  const moveHeader = document.querySelectorAll(".gHeader");
  const closeMenu = document.querySelector(".gNavInner a[href]");
  let jude = false;
  clickPoint.forEach(clickItem => {
    clickItem.addEventListener("click", () => {
      clickItem.classList.toggle("click");
      fixItem.forEach(fixed => {
        fixed.classList.toggle("fix");
      });
      moveHeader.forEach(move => {
        if (!jude) {
          jude = true;
          move.classList.add("open");
          move.classList.remove("close");
          closeMenu.addEventListener("click", () => {
            jude = false;
            move.classList.remove("open");
          });
        } else {
          jude = false;
          move.classList.remove("open");
          move.classList.add("close");
        }
      });
    });
  });
})();

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
  autoplaySpeed: 0,
  speed: 10000,
  swipe: false,
  cssEase: "linear",
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

// google map api
function initMap() {
  var mapPosition = { lat: 35.693429, lng: 139.7602345 };
  var mapArea = document.getElementById("map");
  var mapOptions = {
    center: mapPosition,
    zoom: 17,
    mapTypeControl: false,
    fullscreenControl: true,
    streetViewControl: true,
    zoomControl: true
  };
  var map = new google.maps.Map(mapArea, mapOptions);
  // マーカー
  var markerOptions = {
    map: map,
    position: mapPosition
  };
  var marker = new google.maps.Marker(markerOptions);
}
initMap();
// scroll
$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
