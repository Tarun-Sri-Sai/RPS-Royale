function loadConstants() {
  const PARTICLE_RADIUS = 30;

  const FRAMERATE = 30;

  const CANVAS_WIDTH = 1200;
  const CANVAS_HEIGHT = 600;

  constants = {
    PARTICLE_RADIUS: PARTICLE_RADIUS,
    VISIBILITY_RADIUS: PARTICLE_RADIUS * 3,
    PROXIMITY_RADIUS: PARTICLE_RADIUS + 2,

    VELOCITY_LIMIT: 180 / FRAMERATE,
    ACCELERATION_LIMIT: 6 / FRAMERATE,

    CANVAS_WIDTH: CANVAS_WIDTH,
    CANVAS_HEIGHT: CANVAS_HEIGHT,

    IMAGES: {
      Rock: loadImage("http://127.0.0.1:5000/get-png/rock"),
      Paper: loadImage("http://127.0.0.1:5000/get-png/paper"),
      Scissors: loadImage("http://127.0.0.1:5000/get-png/scissors"),
    },
    BACKGROUND_GRAYSCALE: 220,

    FLOCK_POPULATION: Math.round((CANVAS_HEIGHT * CANVAS_WIDTH) / 15000),

    FRAMERATE: FRAMERATE,

    TARGETS: {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    },
  };
}
