function loadConstants() {
  const FRAMERATE = 30;

  let CANVAS_WIDTH, CANVAS_HEIGHT, PARTICLE_RADIUS, POPULATION;

  if (window.screen.width <= 600) {
    CANVAS_WIDTH = Math.round((9 * window.screen.width) / 10);
    CANVAS_HEIGHT = Math.round((7 * CANVAS_WIDTH) / 5);
    PARTICLE_RADIUS = Math.round((CANVAS_HEIGHT * CANVAS_WIDTH) / 7500)

    POPULATION = 20
  } else {
    CANVAS_WIDTH = Math.round((3 * window.screen.width) / 5);
    CANVAS_HEIGHT = Math.round((3 * CANVAS_WIDTH) / 5);
    PARTICLE_RADIUS = Math.round((CANVAS_HEIGHT * CANVAS_WIDTH) / 15000)

    POPULATION = 35
  }

  const URL_PREFIX =
    "https://raw.githubusercontent.com/Tarun-Sri-Sai/RPS-Royale/main/assets";

  constants = {
    PARTICLE_RADIUS,
    VISIBILITY_RADIUS: PARTICLE_RADIUS * 3,
    PROXIMITY_RADIUS: PARTICLE_RADIUS,

    VELOCITY: 3,

    CANVAS_WIDTH,
    CANVAS_HEIGHT,

    IMAGES: {
      Rock: loadImage(`${URL_PREFIX}/Rock.png`),
      Paper: loadImage(`${URL_PREFIX}/Paper.png`),
      Scissors: loadImage(`${URL_PREFIX}/Scissors.png`),
    },
    BACKGROUND_GRAYSCALE: 220,

    POPULATION,

    FRAMERATE,

    TARGETS: {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    },

    ORIENTATIONS: {
      Rock: 0,
      Scissors: HALF_PI,
      Paper: HALF_PI,
    }
  };
}
