"use strict";

let flock;
let constants;
let isPaused = true;
let isOver = false;

function preload() {
  loadConstants();
}

function setup() {
  const canvas = createCanvas(constants.CANVAS_WIDTH, constants.CANVAS_HEIGHT);
  canvas.parent("canvas-container");

  flock = new Flock();
}

function draw() {
  background(constants.BACKGROUND_GRAYSCALE);
  frameRate(constants.FRAMERATE);

  if (isPaused) {
    flock.display();
    return;
  }

  flock.update();
  flock.display();

  if (flock.isSame()) {
    noLoop();

    isOver = true;
    getToggleBtn().innerText = "Restart";
  }
}

function toggleSimulation() {
  if (isOver) {
    location.reload();
  }

  isPaused = !isPaused;

  getToggleBtn().innerText = isPaused ? "Resume" : "Pause";
}

function getToggleBtn() {
  return document.getElementById("toggle-btn");
}
