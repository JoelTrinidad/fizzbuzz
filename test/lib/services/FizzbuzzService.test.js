const FizzbuzzService = require("./../../../lib/services/FizzbuzzService");

describe("Test for FizzbuzzService", () => {

    test("Assign Trick property with possible Fizz and Buzz value", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer3 = {name: "Explorer3", score: 3};
        const explorer5 = {name: "Explorer5", score: 5};
        const explorer15 = {name: "Explorer15", score: 15};
    
        expect(FizzbuzzService.applyValidationInExplorer(explorer1)).toStrictEqual({name: "Explorer1", score: 1, trick: 1});
        expect(FizzbuzzService.applyValidationInExplorer(explorer3)).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
        expect(FizzbuzzService.applyValidationInExplorer(explorer5)).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"});
        expect(FizzbuzzService.applyValidationInExplorer(explorer15)).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});
    });
    
    test("applyValidationInNumber function return FIZZ", () => {
        expect(FizzbuzzService.applyValidationInNumber(3)).toBe("FIZZ");
    });
    
    test("applyValidationInNumber function return BUZZ", () => {
        expect(FizzbuzzService.applyValidationInNumber(5)).toBe("BUZZ");
    });
    
    test("applyValidationInNumber function return FIZZBUZZ", () => {
        expect(FizzbuzzService.applyValidationInNumber(15)).toBe("FIZZBUZZ");
    });
    
    test("applyValidationInNumber function return a the number given", () => {
        expect(FizzbuzzService.applyValidationInNumber(2)).toBe(2);
    });
});