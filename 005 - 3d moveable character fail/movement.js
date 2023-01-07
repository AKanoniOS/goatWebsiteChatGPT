const characterElement = document.getElementById('character');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

characterElement.addEventListener('mousedown', (e) => {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;
  
  if (e.target === characterElement) {
    isDragging = true;
  }
});

characterElement.addEventListener('mouseup', () => {
  initialX = currentX;
  initialY = currentY;
  
  isDragging = false;
});

characterElement.addEventListener('mousemove', (e) => {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    
    xOffset = currentX;
    yOffset = currentY;
    
    setTranslate(currentX, currentY, characterElement);
  }
});

const setTranslate = (xPos, yPos, el) => {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}
