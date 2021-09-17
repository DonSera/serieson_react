function sortRank(array, sliceNum = 0) {
    console.dir(array);
    const copy = array;
    console.log(Array.isArray(copy));

    copy.sort(function (a, b) {
        if (a['sold'] > b['sold']) {
            return -1;
        }
        if (a['sold'] < b['sold']) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });
    if (sliceNum) {
        return copy.slice(0, sliceNum);
    } else {
        return copy;
    }
}

export default sortRank;