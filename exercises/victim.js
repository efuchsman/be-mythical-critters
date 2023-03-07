var Werewolf = require('../exercises/werewolf');
class Victim extends Werewolf {
  constructor(name) {
    super(name);
    this.alive = true;
  }

  isDead() {
    this.alive = false;
  }
}

module.exports = Victim;
