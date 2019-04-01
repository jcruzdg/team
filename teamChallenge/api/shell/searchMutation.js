var horizontalRegex = /(A{4})|(T{4})|(C{4})|(G{4})/gmi;

module.exports = {

    horizontalSearch: async (dnaArray, count = 0) => {
        var counter = count;
        for (var i = 0; i < dnaArray.length; i++) {
            if (dnaArray[i].match(horizontalRegex)) counter++
            if (counter > 1) return counter;
        };
        return counter;
    },

    verticalSearch: async (dnaArray, count = 0) => {
        for (var j = 0; j < dnaArray[0].length; j++) {
            console.log('----------');
            for (var i = 0; i < dnaArray.length; i++) {
                console.log(dnaArray[i][j]);
            }
        }
    },
    obliqueSearch: async (dnaArray, count = 0) => {
    }
}