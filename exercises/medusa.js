class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.push(victim);
    victim.isStoned();
    while (this.statues.length > 3) {
      const firstVictim = this.statues.shift();
      firstVictim.notStoned();
    }
  }
}

module.exports = Medusa;
