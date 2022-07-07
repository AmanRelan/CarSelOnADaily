// You spend a third of all the money you have on a piano. Half of your remaining money you use to buy a piano chair. A quarter of the rest of your money you use to buy piano books. What porportion of you original money is remaining?

function moneyLeft(totalMoney) {
    //Lets say we have a total of 30$ -> spent 1/3 * 30 => 10 on piano -> 20 remaining => spent half on piano chair => 10 => quarter on piano books => 7.5 which is 1/4 of the total money
    return totalMoney / 4;
}

module.exports = moneyLeft;