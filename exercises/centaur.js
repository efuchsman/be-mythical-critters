class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  shoot() {
    return "Twang!!!";
  }

  run() {
    return "Clop clop clop clop!!!";
  }
}

module.exports = Centaur;
