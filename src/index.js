
// You should implement your task here.
//  const matrix = [
//     [1, 2, 4],
//     [5, 6, 7, 8],
//     [9, 12],
// ];
// towelSort(matrix);
module.exports = function towelSort (matrix) {
    if (arguments.length == 0 || matrix.length == 0) return [];

    let result = matrix.map((el, index) => {
        if (index == 0 || index % 2 == 0) {
            return el;
        }
        else {
            return el.reverse();
        }
    });

    let output = [];
    output = output.concat(...result);

    return output;
}
