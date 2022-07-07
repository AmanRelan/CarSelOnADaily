// A fire fighter has to get to a burning building as quickly as he can. There are three paths that he can take. He can take his fire engine over a large hill (5 miles) at 10 miles per hour. He can take his fire engine through a windy road (7 miles) at 9 miles per hour. Or he can drive his fire engine along a dirt road which is 8 miles at 12 miles per hour. Which way should he choose?

function calculateTime(distance, speed) {
    return ((distance / speed) * 60).toFixed(2);
}

module.exports = calculateTime;