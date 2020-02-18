let Calculator = require("../src/index")

let calculator1 = new Calculator()

describe("Calculator", function(){
    it("should return 8", function(){
        expect(calculator1.add(3,5)).toBe(8)
    })
    it("should return 60", function(){
        expect(calculator1.multiply(30,2)).toBe(60)
    })
    it("should return 10", function(){
        expect(calculator1.add(3,5,2)).toBe(10)
    })
    it("should return last result", function(){
        calculator1.add(1,2)
        expect(calculator1.last()).toBe(3)
    })
    it("should return 10", function(){
        calculator1.add(1,2)
        calculator1.last()
      LAST = calculator1.last()
        expect(calculator1.multiply(LAST,5)).toBe(15)
    })
})