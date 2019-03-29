
const arrayDnaIsValid = require('../shell/specificLetters');

module.exports = (dnaArray) => {
    if (!_.isArray(dnaArray) || !arrayDnaIsValid.isValidDnaArray(dnaArray)) {
        return false;
    }
    
    return true;
}