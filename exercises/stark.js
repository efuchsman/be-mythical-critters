var Direwolf = require('../exercises/direwolf');

class Stark extends Direwolf {
  constructor(name, location = "Winterfell") {
    super(name);
    this.location = location;
    this.safe = false;
  }

  houseWords() {
    if (this.safe == false) {
      return "Winter is Coming";
    } else {
      return "The North Remembers"
    }
  }
}


module.exports = Stark;
