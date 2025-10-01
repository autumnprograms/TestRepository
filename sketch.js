let screenshot;

function preload()
{
  screenshot = loadImage('gif.gif');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(screenshot,0,0,screenshot.width/3,screenshot.height/3);
  test = DeviceOrientationEvent
  text(test,50,50);
}