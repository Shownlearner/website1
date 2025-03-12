const circle = document.getElementById('circle');
const circleText = document.getElementById('circleText');

circle.addEventListener('click', () => {
  circle.classList.add('expanded'); // Start the circle expansion animation
  setTimeout(() => {
    document.body.style.backgroundColor = 'black'; // Change the background to black after the animation
    circleText.textContent = 'I warned you'; // Update the text
    circleText.style.display = 'block'; // Display the updated text
  }, 1500); // Wait for 1.5 seconds to match the animation duration
});
