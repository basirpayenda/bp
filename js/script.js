/* Navigation bar */
burger_menu = document.querySelector(".burger-menu");
bar = document.querySelector(".bar");
nav_menu = document.querySelector("#nav-menu");

burger_menu.addEventListener("click", function() {
  burger_menu.classList.toggle("open");
  nav_menu.classList.toggle("open");
  console.log("clicked");
});

/* showcase */
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

// smooth scroll
$("a[href*='#']").on("click", function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    700
  );
});

// bottom to Top button
window.onscroll = function() {
  toTopBtn = document.querySelector(".toTopBtn");

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

/* swiper for books */
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/* light gallery */

