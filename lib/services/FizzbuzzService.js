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
            explorer.trick = "";
            if(explorer.score%3 === 0) explorer.trick += "FIZZ";
            if(explorer.score%5 === 0) explorer.trick += "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }
    static applyValidationInNumber(number){
        let message = "";
        if(number % 3 !== 0 && number % 5 !== 0) return number;
        if(number % 3 === 0) message += "FIZZ";
        if(number % 5 === 0) message += "BUZZ";
        return message;
    }
}

module.exports = FizzbuzzService;