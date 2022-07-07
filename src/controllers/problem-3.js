// Question:- You spend 21 dollars on vegetables at the store. You buy carrots, onions and celery. The celery cost half the cost of the onions. The onions cost have the cost of the carrots. How much did the onions cost?

//Assuming onions and carrots have the same cost
function onionPrice(totalSpend) {
    return ((totalSpend / 5) * 2).toFixed(2);
}

module.exports = onionPrice;