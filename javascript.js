document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', () => {
    const soundEl = document.querySelector('#ambientSound');
    if (soundEl && soundEl.components.sound) {
      soundEl.components.sound.playSound();
    }
  }, { once: true }); // Ensures the sound starts only on the first click
});
