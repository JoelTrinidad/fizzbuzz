class ExplorerService {
    static filterByMission( explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const amount = this.filterByMission(explorers, mission).length
        return amount
    }
}

module.exports = ExplorerService