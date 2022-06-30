const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    res.json({mission: mission, quantity: explorersAmountInMission});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});