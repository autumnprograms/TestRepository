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
  if (noMobileSensorInput()) return; // Check if sensor data is available
  image(screenshot,0,0,screenshot.width/3,screenshot.height/3);
  test = DeviceOrientationEvent
  text(test,50,50);
}

function setupMobile() {
  if (typeof DeviceOrientationEvent !== "undefined") {
    DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          // Permission granted, allow sensor access
          console.log('Permission granted for mobile sensors');
        } else {
          console.log('Permission denied for mobile sensors');
        }
      });
  }
}