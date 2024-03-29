class Boid {
  constructor(id) {
    this.position = createVector(
      random(width - constants.PARTICLE_RADIUS),
      random(height - constants.PARTICLE_RADIUS)
    );
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
    this.id = id;
  }

  update(boids) {
    this.updateId(boids);

    this.updateBoidMovement(boids);

    this.limitMovement();
    this.fitScreen();

    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  }

  updateId(boids) {
    for (const boid of boids) {
      if (
        constants.TARGETS[boid.id] === this.id &&
        this.getDistance(boid) < constants.PROXIMITY_RADIUS
      ) {
        this.id = boid.id;
      }
    }
  }

  display() {
    image(
      constants.IMAGES[this.id],
      this.position.x,
      this.position.y,
      constants.PARTICLE_RADIUS,
      constants.PARTICLE_RADIUS
    );
  }

  fitScreen() {
    if (this.position.x < 0) {
      this.position.x  = constants.CANVAS_WIDTH;
    }
    if (this.position.x > constants.CANVAS_WIDTH) {
      this.position.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = constants.CANVAS_HEIGHT;
    }
    if (this.position.y > constants.CANVAS_HEIGHT) {
      this.position.y = 0;
    }
  }

  limitMovement() {
    this.velocity.limit(constants.VELOCITY_LIMIT);
    this.acceleration.limit(constants.ACCELERATION_LIMIT);
  }

  getDistance(boid) {
    return dist(
      this.position.x,
      this.position.y,
      boid.position.x,
      boid.position.y
    );
  }

  updateBoidMovement(boids) {
    const targetBoids = [];
    const friendlyBoids = [];

    for (const boid of boids) {
      if (
        boid === this ||
        this.getDistance(boid) >= constants.VISIBILITY_RADIUS
      ) {
        continue;
      }
      if (constants.TARGETS[this.id] === boid.id) {
        targetBoids.push(boid);
      } else {
        friendlyBoids.push(boid);
      }
    }

    this.acceleration.add(this.cohere(targetBoids));
    this.acceleration.add(this.separate(friendlyBoids));
  }

  scale(vector) {
    vector.setMag(constants.VELOCITY_LIMIT);
    vector.sub(this.velocity);
    return vector.limit(constants.ACCELERATION_LIMIT);
  }

  cohere(boids) {
    const averagePosition = createVector();

    for (const boid of boids) {
      averagePosition.add(boid.position);
    }

    const length = boids.length;
    if (length === 0) {
      return averagePosition;
    }

    averagePosition.div(length);
    averagePosition.sub(this.position);
    return this.scale(averagePosition);
  }

  separate(boids) {
    const averagePosition = createVector();

    for (const boid of boids) {
      const difference = p5.Vector.sub(this.position, boid.position);
      difference.mult(100 ** -Math.max(this.getDistance(boid), 1e-6));

      averagePosition.add(difference);
    }

    const length = boids.length;
    if (length === 0) {
      return averagePosition;
    }

    averagePosition.div(length);
    return this.scale(averagePosition);
  }
}
