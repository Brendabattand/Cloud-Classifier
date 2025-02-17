let classifier; 
let img;
let imgA;
let imgB;
let imgC;
let label;
let confidence;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/2fp-ymHGr/';

function preload() {
    classifier = ml5.imageClassifier(imageModelURL + "model.json");
    img = loadImage("imagen/cirro.png");
    imgA = loadImage("imagen/clear.png");
    imgB = loadImage("imagen/cumulos.png");
    imgC = loadImage("imagen/estrato.png");

  }
  


function setup() {
    createCanvas(800, 400);
    background(225,0,0);
    classifier.classify(img, gotResult);
    image(img,0,0);
   

  }
  
  function draw() {
    if (keyIsPressed === true) {
        if (key === 'w') {
            classifier.classify(img, gotResult);
            image(img,0,0);
        } else if (key === 's') {
            classifier.classify(imgA, gotResult);
            image(imgA,0,0);
        } else if (key === 'a') {
            classifier.classify(imgB, gotResult);
            image(imgB,0,0);
        } else if (key === 'd') {
            classifier.classify(imgC, gotResult);
            image(imgC,0,0);
        }
      }
    
  }

  // Callback function for when classification has finished
function gotResult(results) {
    // The results are in an array ordered by confidence
    console.log(results);
    fill(255,0,0);
    stroke(0);
    textSize(20);

    label = "Label: " + results[0].label;
    confidence = "Confidence: " + nf(results[0].confidence, 0, 2);
    text(label, 10, 360);
    text(confidence, 10, 380);
  }
  