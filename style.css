document.addEventListener('DOMContentLoaded', () => {
  // Set event listener for the first tap or click
  document.addEventListener('click', startModelDisplay, { once: true });
});

function startModelDisplay() {
  // Display the 3D model in AR after the first user interaction
  const modelEntity = document.querySelector('#modelEntity');
  if (modelEntity) {
    modelEntity.setAttribute('visible', 'true'); // Show the 3D model
  }
  
  // Optional: Start sound if available
  const soundEl = document.querySelector('#ambientSound');
  if (soundEl && soundEl.components.sound) {
    soundEl.components.sound.playSound();
  }
}
