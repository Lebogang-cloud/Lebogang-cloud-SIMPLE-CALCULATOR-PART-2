describe("Calculator", () => {

  beforeEach(function() {
    global.Calculator = require("../src/simple-calculator-part2");
    global.calculator1 = new Calculator();
  });

  it('should check if add() is defined', function() {
    expect(calculator1.add()).toBeDefined();
  });

  it('should check if multiply() is defined', function() {
    expect(calculator1.multiply()).toBeDefined();
  });

  it("should return 3", () => {
    expect(calculator1.add(1, 2)).toBe(3);
  });

  it('should check the sum of two numbers', function() {
    expect(calculator1.add(0, 0)).toBe(0);
  });

  it('should return 60 ', function() {
    expect(calculator1.multiply(30, 2)).toBe(60);
  });

  it('should multipy numbers in the array', function() {
    expect(calculator1.multiply(1, 2, 3, 4)).toBe(24);
  });

  it("should return result with 'LAST' as parameter", () => {
    calculator1.add(1, 2);
    calculator1.last();
    expect(calculator1.multiply("LAST", 5)).toBe(15);
  });


  it("should return get_slot(1) number", () => {
    calculator1.add(1, 2);
    calculator1.set_slot(1);
    expect(calculator1.get_slot(1)).toBe(3);
  });

  it("should return get_slot(2) number", () => {
    calculator1.add(1, 2);
    calculator1.set_slot(1);
    calculator1.add(10, 20);
    calculator1.set_slot(2);
    expect(calculator1.get_slot(2)).toBe(30);
  });

  it("should return result with SLOT_1 as parameter", () => {
    calculator1.add(1, 2);
    calculator1.set_slot(1);
    expect(calculator1.add("SLOT_1", 4)).toBe(7);
  });

});
