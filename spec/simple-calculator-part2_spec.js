

describe("Calculator", function(){

    beforeEach (()=>{
         global.Calculator = require("../src/index")
         global.calculator1 = new Calculator()
    })
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
        
     
        expect(calculator1.multiply("LAST",5)).toBe(15)
    })

    it("should test if set_slot() have been called with parameter 1", () => {

        spyOn(calculator1, "set_slot")

        calculator1.set_slot(1)
        expect(calculator1.set_slot).toHaveBeenCalledWith(1)
    })

    it("should return slot 1", function(){
        calculator1.add(1,2)
        calculator1.last()
        calculator1.set_slot(1)
        expect(calculator1.get_slot(1)).toBe(3)
    })

    it("should test if set_slot() have been called with parameter 1", () => {

        spyOn(calculator1, "set_slot")

        calculator1.set_slot(2)
        expect(calculator1.set_slot).toHaveBeenCalledWith(2)
    })
    it("should add slot with the number in the parenthesis", function(){

        calculator1.add(1,2)
        calculator1.set_slot(1)
        calculator1.add("SLOT_1",5) 
        calculator1.set_slot(2)
        // calculator1.set_slot(2)

        expect(calculator1.get_slot(2)).toBe(8)
    })

    it("should return slot 2", function(){

       calculator1.add(100, 200)
        calculator1.set_slot(1)
        calculator1.set_slot(2)
        
        
        expect(calculator1.last()).toBe(300)
    })
})