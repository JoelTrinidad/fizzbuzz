class ExplorerService {
    static filterByMission( explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
}

module.exports = ExplorerService