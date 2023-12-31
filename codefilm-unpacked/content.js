// Create overlay element
const filmOverlay = document.createElement('div');
filmOverlay.classList.add('film-overlay');
filmOverlay.style.position = 'fixed';
filmOverlay.style.top = '10px';
filmOverlay.style.left = '10px';
filmOverlay.style.display = 'none';
filmOverlay.style.flexDirection = 'row';
filmOverlay.style.alignItems = 'center';
filmOverlay.style.justifyContent = 'space-between';
filmOverlay.style.padding = '10px';
filmOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

// Create resizer element
const resizer = document.createElement('div');
resizer.style.width = '10px';
resizer.style.height = '10px';
resizer.style.background = 'red';
resizer.style.position = 'absolute';
resizer.style.top = '0';
resizer.style.left = '0';
resizer.style.cursor = 'se-resize';

// Create green dot element
const dot = document.createElement('div');
dot.style.width = '10px';
dot.style.height = '10px';
dot.style.backgroundColor = 'green';
dot.style.borderRadius = '50%';
dot.style.marginRight = '5px';

// Create text element
const text = document.createElement('pre');
text.style.color = 'white';
text.style.fontFamily = 'Arial, sans-serif';
text.style.fontSize = '1vw'; // The font size is 1% of the viewport's width
text.style.flexGrow = '1';
text.style.whiteSpace = 'pre-wrap'; // Preserve whitespace and line breaks
text.style.overflow = 'hidden'; // Hide overflowing content
text.style.wordBreak = 'break-all'; // Break long words

// Create toggle button
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Overlay';
toggleButton.style.marginLeft = '10px';
toggleButton.style.padding = '5px 10px';
toggleButton.style.backgroundColor = 'gray';
toggleButton.style.color = 'white';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '4px';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.zIndex = '9999';

// Create fit button
const fitButton = document.createElement('button');
fitButton.textContent = 'Fit to Tab';
fitButton.style.marginLeft = '10px';
fitButton.style.padding = '5px 10px';
fitButton.style.backgroundColor = 'gray';
fitButton.style.color = 'white';
fitButton.style.border = 'none';
fitButton.style.borderRadius = '4px';
fitButton.style.position = 'fixed';
fitButton.style.top = '50px';
fitButton.style.right = '10px';
fitButton.style.zIndex = '9999';

// Variables for storing the current position and the mouse offset
let drag = false;
let currentX;
let currentY;
let offsetX;
let offsetY;
let isResizing = false;
let scale = 1;

// mousedown event for dragging
filmOverlay.addEventListener('mousedown', function (e) {
  if (e.shiftKey) {
    offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
    offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
    drag = true;
  }
});

// mousedown event for resizing
resizer.addEventListener('mousedown', function (e) {
  isResizing = true;
});

// mousemove event for dragging and resizing
window.addEventListener('mousemove', function (e) {
  e.preventDefault();
  if (drag) {
    currentX = e.clientX - offsetX;
    currentY = e.clientY - offsetY;
    filmOverlay.style.left = currentX + 'px';
    filmOverlay.style.top = currentY + 'px';
  } else if (isResizing) {
    let newWidth = e.pageX - filmOverlay.offsetLeft;
    let newHeight = e.pageY - filmOverlay.offsetTop;
    filmOverlay.style.width = newWidth + 'px';
    filmOverlay.style.height = newHeight + 'px';
    text.style.transform = `scale(${scale})`;
    adjustTextSize();
  }
});

// mouseup event for dragging and resizing
window.addEventListener('mouseup', function () {
  drag = false;
  isResizing = false;
});

// mousewheel event for zooming
filmOverlay.addEventListener('mousewheel', function (e) {
  e.preventDefault();
  const zoomSpeed = 0.1;
  scale += e.deltaY > 0 ? -zoomSpeed : zoomSpeed;
  scale = Math.max(scale, 0.1); // Minimum scale
  filmOverlay.style.transform = `scale(${scale})`;
  adjustTextSize();
});

// fit button click event
fitButton.addEventListener('click', function () {
  const tabWidth = window.innerWidth;
  const tabHeight = window.innerHeight;
  filmOverlay.style.width = tabWidth + 'px';
  filmOverlay.style.height = tabHeight + 'px';
  text.style.transform = `scale(${scale})`;
  adjustTextSize();
});

// Append elements
filmOverlay.appendChild(dot);
filmOverlay.appendChild(text);
filmOverlay.appendChild(resizer);
toggleButton.addEventListener('click', async function toggleOverlay() {
  if (filmOverlay.style.display === 'none') {
    try {
      const copiedCode = await navigator.clipboard.readText();
      text.textContent = copiedCode;
      filmOverlay.style.display = 'flex';
      adjustTextSize();
    } catch (error) {
      console.log('Failed to read clipboard:', error);
    }
  } else {
    filmOverlay.style.display = 'none';
  }
});

// Append to body
const parentContainer = document.querySelector('body');
parentContainer.appendChild(filmOverlay);
parentContainer.appendChild(toggleButton);
parentContainer.appendChild(fitButton);

// Adjust text size to fit container
function adjustTextSize() {
  const containerWidth = filmOverlay.offsetWidth;
  const containerHeight = filmOverlay.offsetHeight;
  const textWidth = text.offsetWidth;
  const textHeight = text.offsetHeight;
  const scaleX = containerWidth / textWidth;
  const scaleY = containerHeight / textHeight;
  const finalScale = Math.min(scaleX, scaleY);
  text.style.transform = `scale(${finalScale})`;
}

// Scale the font size initially and whenever the window is resized
adjustTextSize();
window.addEventListener('resize', adjustTextSize);


