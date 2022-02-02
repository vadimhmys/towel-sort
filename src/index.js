
module.exports = function towelSort (matrix) {
    if(arguments.length === 0) return [];
    let towelMatrix = matrix.map((item,index) => (index % 2 === 0) ? item : item.reverse());
    let arr = [];
    towelMatrix.forEach( item => arr.push(...item) );
    return arr;
}
