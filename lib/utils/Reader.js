const fs = require("fs");

class Reader {
  static readJsonFile(filePath) {

    const rawdata = fs.readFileSync("explorers.json");
    return JSON.parse(rawdata);
  }
}

module.exports = Reader