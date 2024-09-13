
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