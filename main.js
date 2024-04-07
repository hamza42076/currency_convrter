#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 280,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.56
};
let user_Answer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "INR"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "INR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_Answer.from];
let toAmount = currency[user_Answer.to];
let amount = user_Answer.amount;
let baseAmount = amount / fromAmount;
// converted into base ammount jitna user ny input dya 
// usy divide krwana h phly apny base amount m measn 
// pkr  se wo convert krnwana cah rha h urp m tw pkr ki value ko divide krwan
// ye gy jitna wo input dega hamy base amount ajaye ga hamare pas!
let converted_amount = baseAmount * toAmount;
// to amount means phly usny wo btai jis se convert krah tha ab jis m convert krwana h wo hamara toAmount hoga?
console.log(converted_amount);
