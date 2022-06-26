const Reader = require("./../../../lib/utils/Reader");

describe("Test for Reader", () => {
    test("Return information from a given path", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers).not.toBeNull();
        expect(explorers).toEqual(
            expect.arrayContaining([
                expect.objectContaining({  name: "Woopa1" }),
                expect.objectContaining({ name: "Woopa2" }),
            ])
        );
    });
});
