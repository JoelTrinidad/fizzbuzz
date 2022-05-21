class FizzbuzzService {
    /**
     * Returns and explorer with trick property added
     * 
     * @param {object} explorer The explorer
     * @param {int} explorer.score The score of the explorer
     * 
     * @returns {Object}  Explorer with trick property added
     */
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 || explorer.score%3 === 0){
            explorer.trick = ""
            if(explorer.score%3 === 0) explorer.trick += "FIZZ"
            if(explorer.score%5 === 0) explorer.trick += "BUZZ"
            return explorer
        }else{
            explorer.trick = explorer.score
            return explorer
        }
    }
}

module.exports = FizzbuzzService