class Entity {
  constructor(id) {
    this.position = createVector(
      random(width - constants.PARTICLE_RADIUS),
      random(height - constants.PARTICLE_RADIUS)
    );
    this.velocity = p5.Vector.random2D().mult(constants.VELOCITY);
    this.acceleration = createVector();
    this.id = id;
  }

  update(entities) {
    this.updateId(entities);
    this.fitScreen();
    this.position.add(this.velocity);
  }

  updateId(entities) {
    for (const entity of entities) {
      if (
        constants.TARGETS[entity.id] === this.id &&
        this.getDistance(entity) < constants.PROXIMITY_RADIUS
      ) {
        this.id = entity.id;
      }
    }
  }

  display() {
    const angle = atan2(this.velocity.y, this.velocity.x);

    push();
    translate(this.position.x, this.position.y);
    rotate(angle + constants.ORIENTATIONS[this.id]);
    imageMode(CENTER);
    image(
      constants.IMAGES[this.id],
      0,
      0,
      constants.PARTICLE_RADIUS,
      constants.PARTICLE_RADIUS
    );
    pop();
  }

  fitScreen() {
    const minWidth = constants.PARTICLE_RADIUS / 2;
    const minHeight = constants.PARTICLE_RADIUS / 2;
    const maxWidth = constants.CANVAS_WIDTH - minWidth;
    const maxHeight = constants.CANVAS_HEIGHT - minHeight;
    if (this.position.x < minWidth) {
      this.position.x = minWidth;
      this.velocity.x *= -1;
    }
    if (this.position.x > maxWidth) {
      this.position.x = maxWidth;
      this.velocity.x *= -1;
    }
    if (this.position.y < minHeight) {
      this.position.y = minHeight;
      this.velocity.y *= -1;
    }
    if (this.position.y > maxHeight) {
      this.position.y = maxHeight;
      this.velocity.y *= -1;
    }
  }

  getDistance(entity) {
    return dist(
      this.position.x,
      this.position.y,
      entity.position.x,
      entity.position.y
    );
  }
}
