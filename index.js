// Your code here
// Move the dodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  // Move the dodger right
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // 400px (game width) - 40px (dodger width) = 360px
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  // Event listener for keydown events
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });