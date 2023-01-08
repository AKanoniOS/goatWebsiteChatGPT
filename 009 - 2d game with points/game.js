const gameElement = document.getElementById('game');
const characterElement = document.getElementById('character');
const dotsElement = document.getElementById('dots');
const scoreElement = document.getElementById('score');
let characterX = 0;
let characterY = 0;
let score = 0;

const addDot = () => {
  const dotElement = document.createElement('div');
  dotElement.classList.add('dot');
  const x = Math.floor(Math.random() * (gameElement.offsetWidth - dotElement.offsetWidth));
  const y = Math.floor(Math.random() * (gameElement.offsetHeight - dotElement.offsetHeight));
  dotElement.style.top = `${y}px`;
  dotElement.style.left = `${x}px`;
  dotsElement.appendChild(dotElement);
};

for (let i = 0; i < 10; i++) {
  addDot();
}

const checkCollision = (rect1, rect2) => {
  const x1 = rect1.offsetLeft;
  const y1 = rect1.offsetTop;
  const x2 = rect2.offsetLeft;
  const y2 = rect2.offsetTop;
  return (x1 < x2 + rect2.offsetWidth) &&
         (x1 + rect1.offsetWidth > x2) &&
         (y1 < y2 + rect2.offsetHeight) &&
         (y1 + rect1.offsetHeight > y2);
};

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

  for (const dot of dotsElement.children) {
    if (checkCollision(characterElement, dot)) {
      dotsElement.removeChild(dot);
      addDot();
      score++;
      scoreElement.innerHTML = `Score: ${score}`;
    }
  }
});
