class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.activityCount = 0;
  }

  shoot() {
    return "Twang!!!";
  }

  run() {
    return "Clop clop clop clop!!!";
  }
}

module.exports = Centaur;
