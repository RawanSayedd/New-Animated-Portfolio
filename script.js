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
const sections = document.querySelectorAll("section"); // Assuming your sections have the "section" tag

// Function to remove active class from all menu items
function removeActiveClasses() {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
}

// Function to add active class to the current section's menu item
function addActiveClassToMenuItem() {
  let index = sections.length;

  while (--index && window.scrollY + 60 < sections[index].offsetTop) {} // Adjust offset as needed

  removeActiveClasses();
  menuItems[index].classList.add("active");
}

// Add click event listener to each menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function () {
    // Remove active class from all menu items
    removeActiveClasses();

    // Add active class to the clicked menu item
    this.classList.add("active");
  });
});

// Add scroll event listener to window
window.addEventListener("scroll", addActiveClassToMenuItem);

// Initial call to set the correct menu item based on current scroll position
addActiveClassToMenuItem();

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
// window.addEventListener("DOMContentLoaded", function () {
//   const cards = document.querySelectorAll(".col-md-4"); // Select all the card elements
//   const showMoreBtn = document.getElementById("show-more");
//   let currentlyVisibleCount = 3; // Number of cards initially visible

//   // Show only a subset of cards, e.g., the first two
//   function showCards(startIndex, count) {
//     for (let i = startIndex; i < startIndex + count; i++) {
//       if (cards[i]) {
//         cards[i].style.display = "block";
//       }
//     }
//   }
//   showCards(0, currentlyVisibleCount);

//   showMoreBtn.addEventListener("click", function () {
//     const currentlyVisibleCards = document.querySelectorAll(
//       ".col-md-4[style='display: block;']"
//     ).length;
//     showCards(currentlyVisibleCards, 3);
//     currentlyVisibleCount += 3;

//     // Hide the "Show More" button if all cards are visible
//     if (currentlyVisibleCount >= cards.length) {
//       showMoreBtn.style.display = "none";
//     }
//   });
// });

// // Function to filter the cards based on the button clicked
// function filterCards(category) {
//   const cards = document.querySelectorAll(".col-md-4"); // Get all the cards

//   cards.forEach((card) => {
//     // Check if the category matches or if the category is 'all'
//     if (category === "all" || card.classList.contains(category)) {
//       card.style.display = "block"; // Show the card
//     } else {
//       card.style.display = "none"; // Hide the card
//     }
//   });
// }

// // Get the filter buttons
// const allBtn = document.getElementById("allBtn");
// const frontendBtn = document.getElementById("frontendBtn");
// const reactBtn = document.getElementById("reactBtn");

// // Attach click event listeners to the filter buttons
// allBtn.addEventListener("click", () => filterCards("all"));
// frontendBtn.addEventListener("click", () => filterCards("frontend"));
// reactBtn.addEventListener("click", () => filterCards("react"));
window.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".col-md-4"); // Select all the card elements
  const showMoreBtn = document.getElementById("show-more");
  let currentlyVisibleCount = 3; // Number of cards initially visible

  // Function to show a subset of cards
  function showCards(startIndex, count) {
    for (let i = startIndex; i < startIndex + count; i++) {
      if (cards[i]) {
        cards[i].style.display = "block";
      }
    }
  }

  // Initially show the first 3 cards
  cards.forEach((card, index) => {
    card.style.display = index < currentlyVisibleCount ? "block" : "none";
  });

  // Show more cards when the "Show More" button is clicked
  showMoreBtn.addEventListener("click", function () {
    const currentlyVisibleCards = document.querySelectorAll(
      ".col-md-4[style='display: block;']"
    ).length;
    showCards(currentlyVisibleCards, 3);
    currentlyVisibleCount += 3;

    // Hide the "Show More" button if all cards are visible
    if (currentlyVisibleCount >= cards.length) {
      showMoreBtn.style.display = "none";
    }
  });

  // Function to filter the cards based on the button clicked
  function filterCards(category) {
    let visibleCount = 0;
    cards.forEach((card) => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = visibleCount < 3 ? "block" : "none";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Reset "Show More" button visibility for the "All" category
    if (category === "all" && visibleCount > currentlyVisibleCount) {
      showMoreBtn.style.display = "block";
    } else if (category !== "all" && visibleCount > 3) {
      showMoreBtn.style.display = "block";
    } else {
      showMoreBtn.style.display = "none";
    }

    // Reset currently visible count when switching categories
    if (category !== "all") {
      currentlyVisibleCount = 3;
    }
  }

  // Get the filter buttons
  const allBtn = document.getElementById("allBtn");
  const frontendBtn = document.getElementById("frontendBtn");
  const reactBtn = document.getElementById("reactBtn");

  // Attach click event listeners to the filter buttons
  allBtn.addEventListener("click", () => filterCards("all"));
  frontendBtn.addEventListener("click", () => filterCards("frontend"));
  reactBtn.addEventListener("click", () => filterCards("react"));
});

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
