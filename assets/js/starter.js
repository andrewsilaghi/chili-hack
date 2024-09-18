// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";
import "../../node_modules/bootstrap/js/dist/collapse.js"

var flkty = new Flickity('.carousel', {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    lazyLoad: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                prevNextButtons: false,
                pageDots: true,
            }
        }
    ],
  });
  
// Function to add green tint to neighboring slides
function updateNeighborSlides() {
    var selectedIndex = flkty.selectedIndex;
    var previousIndex = selectedIndex - 1;
    var nextIndex = selectedIndex + 1;
  
    if (previousIndex < 0) {
      previousIndex = flkty.cells.length - 1;
    }
    if (nextIndex >= flkty.cells.length) {
      nextIndex = 0;
    }
  
    // Remove the class from all cells
    flkty.cells.forEach(function (cell) {
      cell.element.classList.remove('neighbor');
    });
  
    // Add class to the neighboring cells
    flkty.cells[previousIndex].element.classList.add('neighbor');
    flkty.cells[nextIndex].element.classList.add('neighbor');
  }
  
  // Run the function on initialization to apply the effect on page load
  updateNeighborSlides();
  
  // Update neighboring slides on each new selection
  flkty.on('select', updateNeighborSlides);