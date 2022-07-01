class ExplorerService {
    /**
     * Returns an array with all the users on a specific mission
     * 
     * @param  {object[]} explorers The list of explorers
     * @param  {string} mission The mission by which to filter
     * 
     * @return {object[]} The list of explorer on the mission
     */
    static filterByMission( explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }    
    /**
     * Returns the amount of explorers on a specific mission
     * 
     * @param  {object[]} explorers The list of explorers
     * @param  {string} mission The mission by which to filter
     * 
     * @return {int} The number of explorers on the mission
     */
    static getAmountOfExplorersByMission(explorers, mission){
        const amount = this.filterByMission(explorers, mission).length;
        return amount;
    }
    /**
     * Returns a username list of explorers on a specific mission
     * 
     * @param  {object[]} explorers The list of explorers
     * @param  {string} mission The mission by which to filter
     * 
     * @return {string[]} The username list of explorers on the mission
     */
    static getExplorersUsernamesByMission(explorers, mission){
        const usernames = this.filterByMission(explorers, mission).map(explorer => explorer.githubUsername);
        return usernames;    
    }
    /**
     * Returns a list of explorers with a specific stack
     * 
     * @param  {object[]} explorers The list of explorers
     * @param  {string} stack The stack by which to filter
     * 
     * @return {object[]} The list of explorers with a specific stack
     */
    static filterByStack(explorers, stack){
        return explorers.filter((explorer) => explorer.stacks.includes(stack));  
    }
}

module.exports = ExplorerService;