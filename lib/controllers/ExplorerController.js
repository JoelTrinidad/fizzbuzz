const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController{
    /**
     * Returns an array with all the users on a specific mission
     * 
     * @param {string} mission The mission by which to filter
     * @returns {object[]} The list of explorer on the mission
     */
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    /**
     * Returns a username list of explorers on a specific mission
     * 
     * @param  {string} mission The mission by which to filter
     * 
     * @return {string[]} The username list of explorers on the mission
     */
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    
    /**
     * Returns the amount of explorers on a specific mission
     * 
     * @param  {string} mission The mission by which to filter
     * 
     * @return {int} The number of explorers on the mission
     */
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    
    /**
     * Returns the trick value depending on the given number
     * 
     * @param  {number} num The number to evaluate
     * 
     * @return {int | string} The trick value
     */
    static getTrickValue(num){
        return FizzbuzzService.applyValidationInNumber(num);
    }
}

module.exports = ExplorerController;