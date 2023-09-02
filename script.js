// menu bar and cancel bar navigation
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menuList = document.querySelector(".menu-list");

menuBtn.onclick = () => {
  menuList.classList.add("active");
  menuBtn.classList.add("hide");
};

cancelBtn.onclick = () => {
  menuList.classList.remove("active");
  menuBtn.classList.remove("hide");
};

// typing script title
var typed = new Typed(".typing-text", {
  // Waits 1000ms after typing "First"
  strings: ["Front-End Developer", "Web Designer", "Freelancer"],
  typeSpeed: 120,
  loop: true,
});
// carousel
$("#recipeCarousel").carousel({
  interval: 10000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
// (function () {
//   "use strict";

//   let preloader = select("#preloader");
//   if (preloader) {
//     window.addEventListener("load", () => {
//       preloader.remove();
//     });
//   }
// })();
