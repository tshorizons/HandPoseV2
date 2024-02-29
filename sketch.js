let handpose;
let video;
let hands = [];
let img;

function setup() {
  createCanvas(380,380);
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("hand", results => {
    hands = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();

 img = createImage(width,height)
  for(let i=0; i<width;i++){
    fill(125);
   // fill(random(0,255),random(0,255),random(0,255));
    rect(random(0,width),random(0,height),20,10);
}

}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  background(0);
  //image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < hands.length; i += 1) {
    const hand = hands[i];
    for (let j = 0; j < hand.landmarks.length; j += 1) {
      const keypoint = hand.landmarks[j];
      fill(random(0,255), random(0,255), random(0,255));
      //noStroke();
      rect(keypoint[0], keypoint[1], 20, 10);
    }
  }
}