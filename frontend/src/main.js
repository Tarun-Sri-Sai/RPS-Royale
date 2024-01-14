"use strict";

let flock;
let constants;

function preload() {
  loadConstants();
}

function setup() {
  createCanvas(constants.CANVAS_WIDTH, constants.CANVAS_HEIGHT);

  flock = new Flock();
}

function draw() {
  background(constants.BACKGROUND_GRAYSCALE);
  frameRate(constants.FRAMERATE);

  flock.update();
  flock.display();

  if (flock.isSame()) {
    noLoop();
  }
}
