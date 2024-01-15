function loadConstants() {
  const FRAMERATE = 30;

  const CANVAS_WIDTH = Math.round(3 * window.screen.width / 5);
  const CANVAS_HEIGHT = Math.round(3 * CANVAS_WIDTH / 5);

  const PARTICLE_RADIUS = Math.round((CANVAS_HEIGHT * CANVAS_WIDTH) / 15000);

  const URL_PREFIX = 'https://raw.githubusercontent.com/Tarun-Sri-Sai/RPS-Royale/main/assets'

  constants = {
    PARTICLE_RADIUS: PARTICLE_RADIUS,
    VISIBILITY_RADIUS: PARTICLE_RADIUS * 2,
    PROXIMITY_RADIUS: PARTICLE_RADIUS,

    VELOCITY_LIMIT: 180 / FRAMERATE,
    ACCELERATION_LIMIT: 5 / FRAMERATE,

    CANVAS_WIDTH: CANVAS_WIDTH,
    CANVAS_HEIGHT: CANVAS_HEIGHT,

    IMAGES: {
      Rock: loadImage(`${URL_PREFIX}/Rock.png`),
      Paper: loadImage(`${URL_PREFIX}/Paper.png`),
      Scissors: loadImage(`${URL_PREFIX}/Scissors.png`),
    },
    BACKGROUND_GRAYSCALE: 220,

    FLOCK_POPULATION: 25,

    FRAMERATE: FRAMERATE,

    TARGETS: {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    },
  };
}
