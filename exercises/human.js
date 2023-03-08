var Ogre = require('../exercises/ogre');

class Human extends Ogre {
  constructor(name) {
    super(name);
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  noticesOgre() {
    if (this.encounterCounter > 0 && this.encounterCounter % 3 == 0) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Human;
