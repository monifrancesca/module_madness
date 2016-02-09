/**
 * Created by newmac on 2/9/16.
 */

/*

 The second module should accept a number and convert it to a USD value
 (Hint: you will want to Google examples of this. I found a couple reasonable examples of this in a simple 5 minute search).

 */

var toUSD = function(num) {
    var newNumber = parseInt(num);
    newNumber = '$' + newNumber.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return newNumber;
};

module.exports = toUSD;

// found this insane example at: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
// could also use toLocaleString method