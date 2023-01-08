const gameElement = document.getElementById('game');
const characterElement = document.getElementById('character');
let characterX = 0;
let characterY = 0;

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      characterY -= 50;
      break;
    case 'ArrowDown':
      characterY += 50;
      break;
    case 'ArrowLeft':
      characterX -= 50;
      break;
    case 'ArrowRight':
      characterX += 50;
      break;
  }
  characterX = Math.max(0, Math.min(gameElement.offsetWidth - characterElement.offsetWidth, characterX));
  characterY = Math.max(0, Math.min(gameElement.offsetHeight - characterElement.offsetHeight, characterY));
  characterElement.style.top = `${characterY}px`;
  characterElement.style.left = `${characterX}px`;
});
