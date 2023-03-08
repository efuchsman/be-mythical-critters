class Ogre {
  constructor(name, home = "Swamp") {
    this.name = name;
    this.home = home;
    this.swings = 0;
  }

  encounter(_human) {
    _human.encounterCounter += 1;
    if (_human.noticesOgre() == true) {
      this.swingAt(_human);
    }
  }

  swingAt(_human) {
    this.swings += 1;
    this.humanKO(_human);
  }

  humanKO(_human) {
    if (this.swings > 0 && this.swings % 2 == 0) {
      _human.knockedOut = true;
    }
  }

  apologize(_human) {
    _human.knockedOut = false;
  }
}

module.exports = Ogre;
