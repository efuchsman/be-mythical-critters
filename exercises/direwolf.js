class Direwolf {
  constructor(name, home = "Beyond the Wall", size = "Massive") {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(_stark) {
    if (_stark.location == this.home && this.starksToProtect.length < 2) {
      this.starksToProtect.push(_stark);
      this.canHunt()
      _stark.safe = true;
    } else if (_stark.location == this.home && this.starksToProtect.length >= 2) {
      const firstStark = this.starksToProtect.shift();
      firstStark.safe = false;
      this.starksToProtect.push(_stark);
      this.canHunt()
      _stark.safe = true;
    }
  }

  canHunt() {
    if (this.starksToProtect.length == 0) {
      this.huntsWhiteWalkers = true;
    } else {
      this.huntsWhiteWalkers = false;
    }
  }

  leave(_stark) {
    if (this.starksToProtect.includes(_stark)) {
      const index = this.starksToProtect.indexOf(_stark);
      this.starksToProtect.splice(index, 1);
      _stark.safe = false;
    }
  }
}

module.exports = Direwolf;
