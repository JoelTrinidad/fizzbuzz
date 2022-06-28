const ExplorerController = require("./../../../lib/controllers/ExplorerController") 

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
        const amountExplorersInNode = ExplorerController.getAmountOfExplorersByMission("node");
        expect(amountExplorersInNode).toBe(10);
    });
});