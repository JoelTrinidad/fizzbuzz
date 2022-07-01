const Reader = require("./../../../lib/utils/Reader");
const ExplorerService = require("./../../../lib/services/ExplorerService");

describe("Test for ExplorerService", () => {

    test("Get all users who are on a specific mission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).not.toBeNull();
        expect(explorersInNode).toEqual(
            expect.arrayContaining([
                expect.objectContaining({  mission: "node" }),
            ])
        );

        explorersInNode.forEach(explorer => {
            expect(explorer.mission).toBe("node");
        });
    });
    
    test("Get amount of users who are on a specific mission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNodeToGetUsernames = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNodeToGetUsernames).toBe(10);
    });

    test("Get username who are on a specific mission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInNode).toContain("ajolonauta12");
    });

    test("Get explorers who have a specific stack", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersWithStack = ExplorerService.filterByStack(explorers, "reasonML");
        
        expect(explorersWithStack).toEqual(
            expect.arrayContaining([
                expect.objectContaining({  stacks: expect.arrayContaining(["reasonML"]) }),
            ])
        );
        explorersWithStack.forEach(explorer => {
            expect(explorer.stacks).toContain("reasonML");
        });
    });

});
