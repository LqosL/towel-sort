
// You should implement your task here.

module.exports = function towelSort (arr) {
    if (arr === undefined) {
        return []
    }

    return arr.map(a => {
        if(arr.indexOf(a) % 2 != 0) {
            return a.reverse()
        }
        else {
            return a
        }
    }).flat()
}
