// You should implement your task here.

module.exports = function towelSort(matrix) {
    if(!matrix) return [];
    matrix
        .forEach(function callback(currentValue, index, _) {
            if (index % 2) {
                currentValue.sort((a, b) => {
                    return a <= b ? 1 : -1;
                });
            } else {
                currentValue.sort((a, b) => {
                    return a >= b ? 1 : -1;
                });
            }
        })
    return matrix.flat();
};
