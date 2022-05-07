const Reader = require('./../../../lib/utils/Reader')

describe('Test for Reader', () => {

    test('Return information from a given path', () => {
        const explorers = Reader.readJsonFile("explorers.json")
        const firstExplorerExpected = {
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": ["javascript", "reasonML", "elm"]
          }
        expect(explorers).not.toBeNull();
        expect(explorers[0]).toContain(firstExplorerExpected);
    });
})