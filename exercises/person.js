var Medusa = require('../exercises/medusa');
class Person extends Medusa {
  constructor(name) {
    super(name);
    this.stoned = false;
  }

  isStoned() {
    this.stoned = true;
  }

  notStoned() {
    this.stoned = false;
  }
}

module.exports = Person;
