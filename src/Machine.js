class Machine {
  constructor() {
    this.snacks = [];
    this.balance = 0;
  }

  seeSelections() {
    return this.snacks;
  }

  stock(inventory) {
    if (inventory == undefined) {
      throw Error("please do not troll. you cannot stock nothing.");
    }
    this.snacks = inventory;
  }

  deposit(amount) {
    if (
      amount == 10 ||
      amount == 20 ||
      amount == 50 ||
      amount == 100 ||
      amount == 500
    ) {
      this.balance = this.balance + amount;
    } else {
      throw Error("Invalid bill type");
    }
    
    return `You have deposited Rs ${this.balance}`;
  }

  selectItem(snackName) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name == snackName) {
          if (this.snacks[i].price > this.balance) {
            return `Your deposit is insufficient. Please add Rs ${this.snacks[i].price - this.balance} for this item`;
          } else {
            return "heres ur item";
          }
      }
    }

    return "The item you selected is unavailable";
  }
}

module.exports = Machine;
