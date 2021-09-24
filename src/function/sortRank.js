function sortRank(array, stand, sliceNum = 0) {
    const copy = array;

    if(typeof stand === 'string'){
        copy.sort(function (a, b) {
            // 반대로 sort 하기 (큰게 위로 오게)
            if (a[stand] > b[stand]) {
                return -1;
            }
            if (a[stand] < b[stand]) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
    }else if(Array.isArray(stand)){
        copy.sort(function (a, b) {
            // 반대로 sort 하기 (큰게 위로 오게)
            if (a[stand[0]][stand[1]] > b[stand[0]][stand[1]]) {
                return -1;
            }
            if (a[stand[0]][stand[1]] < b[stand[0]][stand[1]]) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
    }

    if (sliceNum) {
        return copy.slice(0, sliceNum);
    } else {
        return copy;
    }
}

export default sortRank;