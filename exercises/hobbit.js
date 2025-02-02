class Hobbit {
  constructor(name, disposition = 'homebody') {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;

    if (name !== 'Frodo') {
      this.hasRing = false;
    } else {
      this.hasRing = true;
    }
  }


  celebrateBirthday() {
    this.age += 1;
    if (this.age >= 33) {
      this.adult = true;
      if (this.age >= 101) {
        this.old = true;
      }
    }
  }
}

module.exports = Hobbit;
