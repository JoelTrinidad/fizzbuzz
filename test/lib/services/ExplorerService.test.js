const Reader = require('./../../../lib/utils/Reader')
const ExplorerService = require('./../../../lib/services/ExplorerService')

describe('Test for ExplorerService', () => {

    test('Get all users who are on a specific mission', () => {
        const explorers = Reader.readJsonFile('explorers.json')
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode).not.toBeNull();
        expect(explorersInNode).toEqual(
            expect.arrayContaining([
              expect.objectContaining({  mission: "node" }),
            ])
          );

        explorersInNode.forEach(explorer => {
            expect(explorer.mission).toBe("node")
        });
    });
    
})
