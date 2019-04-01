var searchMutation = require('../shell/searchMutation');

module.exports = {
    hasMutation: async (dnaArray) => {
        try {
            // try to find in horizontal cases
            var count = await searchMutation.horizontalSearch(dnaArray);
            // try to find in vertical cases
            !(count > 1) ?
                count = await searchMutation.verticalSearch(dnaArray, count) :
                // try to find in oblique cases
                !(count > 1) ?
                    count = await searchMutation.obliqueSearch(dnaArray, count) : 0;
            return count;
        } catch (exception) {
            var error = new Error();
            error.title = 'We have some errors';
            error.message = exception;
            error.count = 0;
            throw error;
        }
    }
}