const ExplorerController = require("./../../../lib/controllers/ExplorerController"); 

describe("Test for ExplorerController", () => {

    test("Get all users who are on a specific mission", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode).not.toBeNull();

        explorersInNode.forEach(explorer => {
            expect(explorer.mission).toBe("node");
        });
    });

    test("Get username who are on a specific mission", () => {
        const usernamesInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesInNode).toContain("ajolonauta12");
    });

    test("Get amount of users who are on a specific mission", () => {
        const amountExplorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountExplorersInNode).toBe(10);
    });

    test("Get trick value", () => {
        expect(ExplorerController.getTrickValue(3)).toBe("FIZZ");
        expect(ExplorerController.getTrickValue(5)).toBe("BUZZ");
        expect(ExplorerController.getTrickValue(15)).toBe("FIZZBUZZ");
        expect(ExplorerController.getTrickValue(7)).toBe(7);
    });
});