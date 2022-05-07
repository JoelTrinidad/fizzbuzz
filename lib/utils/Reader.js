class Reader {
  static readJsonFile(filePath) {
    const fs = require("fs");

    const rawdata = fs.readFileSync("explorers.json");
    return JSON.parse(rawdata);
  }
}
