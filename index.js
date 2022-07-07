const express = require('express');
const { reset } = require('nodemon');
const app = express();

const databaseConnectionFile = require('./config/db.config');
// use databaseConnectionFile to do something on the database

const firstSolution = require('./src/controllers/problem-1');
const secondSolution = require('./src/controllers/problem-2');
const thirdSolution = require('./src/controllers/problem-3');
const fourthSolution = require('./src/controllers/problem-4');
const seventhSolution = require('./src/controllers/problem-7');

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
app.get('/', (req, res) => {
    res.send("Welcome to the test app for Carselonadaily.")
});

//query parameter: time :- assuming [12:00/3:15]
app.get('/solution-1', (req, res) => {
    let timeQuery = req.query.time;
    let timeTaken = timeQuery.split(":");
    const [hours, minutes] = timeTaken;
    let degreeAngle = firstSolution(hours, minutes);
    res.send(`Solution to the first problem is :- ${degreeAngle} degrees`);
});

//query parameter:- val/comma separated distance speed[distance1,speed1,distance2,speed2,distance3,speed3]
//Example:- http://localhost:3000/solution-2?val=5,10,7,9,8,12
app.get('/solution-2', (req, res) => {
    let queryArr = req.query.val.split(',');
    let [distance1, speed1, distance2, speed2, distance3, speed3] = queryArr;
    let time1 = secondSolution(distance1, speed1);
    let time2 = secondSolution(distance2, speed2);
    let time3 = secondSolution(distance3, speed3);
    if (time1 < time2 && time1 < time3) {
        res.send(`The path that should be taken is the one where you travel at ${speed1} miles per hour for ${distance1} miles`);
    } else if (time2 < time1 && time2 < time3) {
        res.send(`The path that should be taken is the one where you travel at ${speed2} miles per hour for ${distance2} miles`);
    } else {
        res.send(`The path that should be taken is the one where you travel at ${speed3} miles per hour for ${distance3} miles`)
    }
});

//query parameter:- total= totalMoneySpent
app.get('/solution-3', (req, res) => {
    let totalSpent = req.query.total;
    let onionPrice = thirdSolution(totalSpent);
    res.send(`The total price for onions would be ${onionPrice} `)
});

//query parameter:- spend=totalMoneySpent
app.get('/solution-4', (req, res) => {
    let totalMoneyRemaining = req.query.spend;
    let remainingMoney = fourthSolution(totalMoneyRemaining)
    res.send(`The total money remaining from the money we had at the start is ${remainingMoney} which is 25% of the starting money`);
});

//query parameters:- type=[robin/knockout], teams=Number Of teams
app.get('/solution-7', (req, res) => {
    let totalTeams = req.query.teams;
    let typeOfTournament = req.query.type;
    let noOfMatches = seventhSolution(typeOfTournament, totalTeams);
    res.send(`Total Number of teams participating ${totalTeams} and to find a winner we need a minimum of ${noOfMatches} following the ${typeOfTournament} tournament type`);
});