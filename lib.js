/**
 * Created by Nick on 2017-09-23.
 */
exports.listToArr = function (lists) {
    let len = lists.length;
    let arr = [];

    for (let i = 0; i < len; i++) {
        arr.push(lists[i]);
    }
    
    return arr;
};