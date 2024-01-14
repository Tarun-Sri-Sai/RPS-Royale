function loadConstants() {
  constants = {
    PARTICLE_RADIUS: 30,
    VISIBILITY_RADIUS: 90,
    PROXIMITY_RADIUS: 30 + 2,

    VELOCITY_LIMIT: 3,
    ACCELERATION_LIMIT: 0.1,

    CANVAS_WIDTH: 1000,
    CANVAS_HEIGHT: 600,

    IMAGES: {
      Rock: loadImage("http://127.0.0.1:5000/get-png/rock"),
      Paper: loadImage("http://127.0.0.1:5000/get-png/paper"),
      Scissors: loadImage("http://127.0.0.1:5000/get-png/scissors"),
    },
    BACKGROUND_GRAYSCALE: 220,

    FLOCK_POPULATION: 40,

    FRAMERATE: 60,

    TARGETS: {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    },
  };
}
