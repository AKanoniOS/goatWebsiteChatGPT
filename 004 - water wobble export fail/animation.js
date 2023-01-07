const downloadButton = document.getElementById('download-button');
const logoElement = document.getElementById('logo');

downloadButton.addEventListener('click', () => {
  // Create a canvas element to render the animation
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = logoElement.offsetWidth;
  canvas.height = logoElement.offsetHeight;

  // Render the animation to the canvas
  logoElement.style.animation = 'none';
  logoElement.style.transform = 'translateY(0)';
  logoElement.style.display = 'inline-block';
  context.drawImage(logoElement, 0, 0);
  const frames = [];
  const numFrames = 30;
  const frameDuration = 1000 / 30; // 30 FPS
  for (let i = 1; i <= numFrames; i++) {
    logoElement.style.transform = `translateY(${5 - (10 / numFrames) * i}px)`;
    context.drawImage(logoElement, 0, 0);
    frames.push(context.getImageData(0, 0, canvas.width, canvas.height));
  }
  logoElement.style.animation = '';
  logoElement.style.transform = '';
  logoElement.style.display = '';

  // Encode the frames as a GIF image
  const gif = new GIF({
    workers: 2,
    quality
  });
  frames.forEach((frame) => {
    gif.addFrame(frame, {
      delay: frameDuration,
    });
  });
  gif.on('finished', (blob) => {
    // Create a link to download the GIF image
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'animation.gif';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
  });
  gif.render();
});
