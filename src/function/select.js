import sortRank from "./sortRank";

function select(array, str, slice = 0) {
    const select = [];
    const sort = sortRank(array, "sales");

    sort.forEach(obj => {
        if (obj[str]) {
            select.push(obj)
        }
    })

    if (slice) {
        return select.slice(0, slice);
    } else {
        return select
    }
}

export default select;