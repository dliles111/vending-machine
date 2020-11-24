const Machine = require('../src/Machine')

describe('The vending machine', () => {
  it('is initialized with no items', () => {
    // SEAT
    // setup
    const vendingMachine = new Machine();

    // exercise & assert
    expect(vendingMachine.seeSelections()).toEqual([])

    // teardown, not needed
  })

  it('can stock one snack', () => {
    // setup
    const vendingMachine = new Machine();
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }

    // exercise
    vendingMachine.stock([snack])

    // assert
    expect(vendingMachine.seeSelections()).toEqual([snack])
  })

  it('displays an error if no inventory comes with stocking', () => {
    // setup
    const vendingMachine = new Machine()
    const displayMessage = "please do not troll. you cannot stock nothing."

    // exercise & assert
    expect(() => vendingMachine.stock()).toThrow(displayMessage)
  })

  // it('displays how much money was deposited', () => {
  //   const vendingMachine = new Machine();
  //   const displaysAmount = 'You have deposited Rs 100';

  //   expect(vendingMachine.deposit(100)).toEqual(displaysAmount);
  // });

  it('Display how much money was deposited and only accepts bills 10, 20, 50, 100, 500', () => {
    const vendingMachine = new Machine();

    expect(vendingMachine.deposit(10)).toEqual('You have deposited Rs 10');
    expect(vendingMachine.deposit(20)).toEqual('You have deposited Rs 30');
    expect(vendingMachine.deposit(50)).toEqual('You have deposited Rs 80');
    expect(vendingMachine.deposit(100)).toEqual('You have deposited Rs 180');
    expect(vendingMachine.deposit(500)).toEqual('You have deposited Rs 680');
  });

  it('Will not accepts bills other than 10, 20, 50, 100, 500', () => {
    const vendingMachine = new Machine();
    const displayMessage = "Invalid bill type";
    expect(() => vendingMachine.deposit(30)).toThrow(displayMessage);
  });

  it('This item is unavailable', () => {
    const vendingMachine = new Machine();
    const displayMessage = 'The item you selected is unavailable';

    expect(vendingMachine.selectItem("soda")).toBe(displayMessage);
  });

  it('This deposit is insufficient', () => {
    const vendingMachine = new Machine();
    const nuts = {
      name: 'macadamia nuts',
      price: 250
    }
    const soda = {
      name: 'soda',
      price: 200
    }

    // exercise
    vendingMachine.stock([nuts, soda]);
    vendingMachine.deposit(50);

    expect(vendingMachine.selectItem("macadamia nuts")).toBe('Your deposit is insufficient. Please add Rs 200 for this item');
    expect(vendingMachine.selectItem("soda")).toBe('Your deposit is insufficient. Please add Rs 150 for this item');
  })


})