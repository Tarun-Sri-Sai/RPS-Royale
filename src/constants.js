function loadConstants() {
  const FRAMERATE = 30;

  let CANVAS_WIDTH, CANVAS_HEIGHT, PARTICLE_RADIUS, FLOCK_POPULATION;

  if (window.screen.width <= 600) {
    CANVAS_WIDTH = Math.round((9 * window.screen.width) / 10);
    CANVAS_HEIGHT = Math.round((7 * CANVAS_WIDTH) / 5);
    PARTICLE_RADIUS = Math.round((CANVAS_HEIGHT * CANVAS_WIDTH) / 7500)

    FLOCK_POPULATION = 20
  } else {
    CANVAS_WIDTH = Math.round((3 * window.screen.width) / 5);
    CANVAS_HEIGHT = Math.round((3 * CANVAS_WIDTH) / 5);
    PARTICLE_RADIUS = Math.round((CANVAS_HEIGHT * CANVAS_WIDTH) / 15000)

    FLOCK_POPULATION = 35
  }

  const URL_PREFIX =
    "https://raw.githubusercontent.com/Tarun-Sri-Sai/RPS-Royale/main/assets";

  constants = {
    PARTICLE_RADIUS: PARTICLE_RADIUS,
    VISIBILITY_RADIUS: PARTICLE_RADIUS * 3,
    PROXIMITY_RADIUS: PARTICLE_RADIUS,

    VELOCITY_LIMIT: 60 / FRAMERATE,
    ACCELERATION_LIMIT: 3 / FRAMERATE,

    CANVAS_WIDTH: CANVAS_WIDTH,
    CANVAS_HEIGHT: CANVAS_HEIGHT,

    IMAGES: {
      Rock: loadImage(`${URL_PREFIX}/Rock.png`),
      Paper: loadImage(`${URL_PREFIX}/Paper.png`),
      Scissors: loadImage(`${URL_PREFIX}/Scissors.png`),
    },
    BACKGROUND_GRAYSCALE: 220,

    FLOCK_POPULATION: FLOCK_POPULATION,

    FRAMERATE: FRAMERATE,

    TARGETS: {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    },
  };
}
