"use strict";

let game;
let constants;
let isPaused = true;
let isOver = false;

function preload() {
  loadConstants();
}

function setup() {
  const canvas = createCanvas(constants.CANVAS_WIDTH, constants.CANVAS_HEIGHT);
  canvas.parent("canvas-container");

  game = new Game();
}

function draw() {
  background(constants.BACKGROUND_GRAYSCALE);
  frameRate(constants.FRAMERATE);

  if (isPaused) {
    game.display();
    return;
  }

  game.update();
  game.display();

  if (game.isSame()) {
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
