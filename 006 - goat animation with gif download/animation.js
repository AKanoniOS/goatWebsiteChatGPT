const downloadButton = document.getElementById('download-button');
const animationContainer = document.getElementById('logo');

downloadButton.addEventListener('click', () => {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = animationContainer.offsetWidth;
  canvas.height = animationContainer.offsetHeight;
  const ctx = canvas.getContext('2d');

  // Draw the animation on the canvas
  let frame = 0;
  const drawAnimation = () => {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the current frame of the animation
    ctx.drawImage(animationFrames[frame], 0, 0);

    // Increment the frame counter
    frame = (frame + 1) % animationFrames.length;

    // Schedule the next frame
    requestAnimationFrame(drawAnimation);
  };
  drawAnimation();

  
  // Convert the canvas to a GIF data URL
  const dataURL = canvas.toDataURL('image/gif');

  // Create a download link
  const link = document.createElement('a');
  link.download = 'animation.gif';
  link.href = dataURL;

  // Simulate a click on the link to trigger the download
  link.click();
});
