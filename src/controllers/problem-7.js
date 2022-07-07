// There are 23 rugby teams playing in a tournament. What is the least number of games that must be played to find a tournament winner?
function noOfMatches(type, numberOfTeams) {
    if (type.toLowerCase() === "knockout") {
        return numberOfTeams - 1;
    } else if (type.toLowerCase() === "robin") {
        return (numberOfTeams * (numberOfTeams - 1)) / 2;
    }
}

module.exports = noOfMatches;