const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");

// Get explorers in Node
const explorersInNode = ExplorerService.filterByMission(explorers, "node");

// Get the explorer's usernames in Node
const explorersUsernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

// Get the quantity of explorers names in Node
const amountExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");

//  Get a list of the explorers in node using FizzbuzzService
const explorersInNodeAndFizzBuzz = explorersInNode.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));