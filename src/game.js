class Game {
  constructor() {
    this.entities = [];
    for (let i = 0; i < constants.POPULATION; i++) {
      this.entities.push(new Entity("Rock"));
      this.entities.push(new Entity("Paper"));
      this.entities.push(new Entity("Scissors"));
    }
  }

  update() {
    for (const entity of this.entities) {
      entity.update(this.entities);
    }
  }

  display() {
    for (const entity of this.entities) {
      entity.display();
    }
  }

  isSame() {
    return this.entities.every((obj) => obj.id === this.entities[0].id);
  }
}
