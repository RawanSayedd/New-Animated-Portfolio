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
//////
///active menu
const menuItems = document.querySelectorAll(".menu-list a");

// Add click event listener to each menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function () {
    // Remove active class from all menu items
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to the clicked menu item
    this.classList.add("active");
  });
});
//progres bar animated
function move() {
  var skills = [
    { id: "myBar1", targetWidth: 95 },
    { id: "myBar2", targetWidth: 85 },
    { id: "myBar3", targetWidth: 80 },
    { id: "myBar4", targetWidth: 85 },
    { id: "myBar5", targetWidth: 70 },
  ];

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
    var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;
  }

  function checkAndAnimate() {
    for (var i = 0; i < skills.length; i++) {
      var skill = skills[i];
      if (!skill.animated && isScrolledIntoView(skill.id)) {
        animateProgress(skill.id, skill.targetWidth);
        skill.animated = true;
      }
    }
  }

  window.addEventListener("scroll", checkAndAnimate);
  window.addEventListener("resize", checkAndAnimate);
  checkAndAnimate();
}

window.addEventListener("load", move);

///////////////////////////
///portfolio btns
const buttons = document.querySelectorAll(".above-btns button");

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    this.classList.add("active");
  });
});
//portfolio cards
window.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".col-md-4"); // Select all the card elements

  // Show only a subset of cards, e.g., the first two
  for (let i = 0; i < cards.length; i++) {
    if (i < 3) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
});
// Function to filter the cards based on the button clicked
function filterCards(category) {
  const cards = document.querySelectorAll(".col-md-4"); // Get all the cards

  cards.forEach((card) => {
    // Check if the category matches or if the category is 'all'
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block"; // Show the card
    } else {
      card.style.display = "none"; // Hide the card
    }
  });
}

// Get the filter buttons
const allBtn = document.getElementById("allBtn");
const frontendBtn = document.getElementById("frontendBtn");
const reactBtn = document.getElementById("reactBtn");

// Attach click event listeners to the filter buttons
allBtn.addEventListener("click", () => filterCards("all"));
frontendBtn.addEventListener("click", () => filterCards("frontend"));
reactBtn.addEventListener("click", () => filterCards("react"));

/////////////////
//countboxxxx
// Get all the count boxes
const countBoxes = document.querySelectorAll(".count-box");

// Function to check if an element is in viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Debounce function to limit the frequency of calculations and updates
const debounce = (func, delay) => {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const incrementNumbersOnScroll = () => {
  countBoxes.forEach((countBox) => {
    const countElement = countBox.querySelector("span");
    const countLimit = parseInt(countElement.innerText);
    let count = 0;
    let isCounting = false;

    const handleScroll = debounce(() => {
      if (isInViewport(countBox)) {
        if (!isCounting) {
          isCounting = true;
          const interval = setInterval(() => {
            if (count < countLimit) {
              count++;
              countElement.innerText = count;
            } else {
              clearInterval(interval);
              isCounting = false;
            }
          }, 1); // Adjust the interval duration if desired
        }
      }
    }, 50); // Adjust the debounce delay if desired

    window.addEventListener("scroll", handleScroll);
  });
};

incrementNumbersOnScroll();

/////download button
$("#btn-download").click(function () {
  $(this).toggleClass("downloaded");
});
const btnDownload = document.getElementById("btn-download");
btnDownload.addEventListener("click", () => {
  const fileUrl = "D:FRONT-END DEVELOPMENTMy projectsNew Portfolio";
  const fileName = "Rawan_Sayed_Dev.pdf";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;

  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
});
