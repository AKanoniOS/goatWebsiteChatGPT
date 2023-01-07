const exportButton = document.getElementById('export-button');
const logoElement = document.getElementById('logo');

exportButton.addEventListener('click', () => {
  // Create a canvas element to render the animation
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = logoElement.offsetWidth;
  canvas.height = logoElement.offsetHeight;

  // Render the animation to the canvas
  logoElement.style.animation = 'none';
  logoElement.style.transform = 'rotateY(0deg)';
  logoElement.style.display = 'inline-block';
  context.drawImage(logoElement, 0, 0);
  const frames = [];
  const numFrames = 30;
  const frameDuration = 1000 / 30; // 30 FPS
  for (let i = 1; i <= numFrames; i++) {
    logoElement.style.transform = `rotateY(${(360 / numFrames) * i}deg)`;
    context.drawImage(logoElement, 0, 0);
    frames.push(context.getImageData(0, 0, canvas.width, canvas.height));
  }
  logoElement.style.animation = '';
  logoElement.style.transform = '';
  logoElement.style.display = '';

  // Encode the frames as a WebM video
  const videoBlob = Whammy.fromImageArray(frames, frameDuration);

  // Create a link to download the video
  const url = URL.createObjectURL(videoBlob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'animation.webm';
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
});
