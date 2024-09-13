
// When the element with class "toggle" is clicked
document.querySelectorAll('.toggle').forEach(function(toggleButton) {
  toggleButton.addEventListener('click', function() {
    document.querySelector('header').classList.add('menuToggle');
  });
});

// When the element with class "close" is clicked
document.querySelectorAll('.close').forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    document.querySelector('header').classList.remove('menuToggle');
  });
});



window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY >= 1) {
    header.classList.add('fixed-header');
    header.classList.add('visible-title');
  } else {
    header.classList.remove('fixed-header');
    header.classList.remove('visible-title');
  }
});








document.addEventListener('DOMContentLoaded', function () {
  // Select all accordion buttons
  const accordionButtons = document.querySelectorAll('.accordion-button');

  // Loop through each button and add a click event listener
  accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-bs-target'); // Get the target panel to collapse/expand
      const targetPanel = document.querySelector(targetId); // The collapse panel

      // Check if the clicked button is already expanded
      const isExpanded = !this.classList.contains('collapsed');

      // Toggle the current button and panel
      if (isExpanded) {
        this.classList.add('collapsed'); // Add collapsed class to mark as closed
        targetPanel.classList.remove('show'); // Hide the panel content
      } else {
        // Close all other panels
        accordionButtons.forEach(function (btn) {
          const panel = document.querySelector(btn.getAttribute('data-bs-target'));
          btn.classList.add('collapsed'); // Collapse the other buttons
          panel.classList.remove('show'); // Hide the other panels
        });

        // Expand the clicked panel
        this.classList.remove('collapsed'); // Mark this button as expanded
        targetPanel.classList.add('show'); // Show the associated content
      }
    });
  });
});




const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);