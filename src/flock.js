class Flock {
  constructor() {
    this.boids = [];
    for (let i = 0; i < constants.FLOCK_POPULATION; i++) {
      this.boids.push(new Boid("Rock"));
      this.boids.push(new Boid("Paper"));
      this.boids.push(new Boid("Scissors"));
    }
  }

  update() {
    for (const boid of this.boids) {
      boid.update(this.boids);
    }
  }

  display() {
    for (const boid of this.boids) {
      boid.display();
    }
  }

  isSame() {
    return this.boids.every((obj) => obj.id === this.boids[0].id);
  }
}
