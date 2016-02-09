/**
 * Created by newmac on 2/9/16.
 */
/*

 The third module should require the other two modules. It should have two function exports.
 The first function export should be the return of the first module being passed into the second module.
 The other function should be a simple text return that says “Account balance: \n”.

 */
var toUSD = require('./usd');
var random = require('./random');

var combineFunctions = function() {
    var combined = toUSD(random(100, 1000000));
    return combined;
};

var accountBalance = function() {
    return "Account balance : \n"
};

module.exports.combineFunctions = combineFunctions;
module.exports.accountBalance = accountBalance;