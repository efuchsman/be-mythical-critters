class Wizard {
  constructor(attributes) {
    this.name = attributes.name;
    this.bearded = attributes.bearded !== undefined ? attributes.bearded : true;
    this.rested = true;
    this.castCount = 0;
  }

  incantation(_string) {
    return _string.toUpperCase();
  }

  cast() {
    if (this.castCount < 3) {
      this.castCount += 1
      return "MAGIC BULLET";
    } else {
      return "I SHALL NOT CAST!";
    }
  }

  isRested() {
    if (this.castCount < 3) {
      return this.rested;
    } else {
      this.rested = false;
      return this.rested
    }

  }
}

module.exports = Wizard;
