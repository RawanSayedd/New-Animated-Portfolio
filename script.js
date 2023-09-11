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
//scroll animation
// const boxes = document.querySelectorAll(".content");
// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 5) * 4;
//   boxes.forEach((box, idx) => {
//     const boxTop = box.getBoundingClientRect().top;
//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.add("show");
//     }
//   });
// }
// window.addEventListener("scroll", checkBoxes);

//progres bar animated
function move() {
  var skills = [
    { id: "myBar1", targetWidth: 95 },
    { id: "myBar2", targetWidth: 85 },
    { id: "myBar3", targetWidth: 80 },
    { id: "myBar4", targetWidth: 85 },
    { id: "myBar5", targetWidth: 70 },
  ];

  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];
    if (!skill.animated && isScrolledIntoView(skill.id)) {
      animateProgress(skill.id, skill.targetWidth);
      skill.animated = true;
    }
  }
}
function animateProgress(id, targetWidth) {
  var elem = document.getElementById(id);
  var width = 0;
  var increment = 1;
  var id = setInterval(frame, 7);

  function frame() {
    if (width >= targetWidth) {
      clearInterval(id);
    } else {
      width += increment;
      elem.style.width = width + "%";
    }
  }
}

function isScrolledIntoView(id) {
  var elem = document.getElementById(id);
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Check if the element is fully visible in the viewport
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}

window.addEventListener("scroll", move);
