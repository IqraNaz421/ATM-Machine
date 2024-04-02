#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000; //Dollar
let myPin = 2345;


console.log("             ##--##   Welcome To My First ATM   ##--##            ");
console.log("                  Login with Rejistered ID: 2345    ");

let pinAnswer = await inquirer.prompt(
  [
    {
      name: "pin",
      message: "Enter your pin",
      type: "number"


    }
  ]

);

if (pinAnswer.pin === myPin) {
  console.log("correct pin code!!!");

  //console.log(`  Current amount balance is ${myBalance} `);


  let operationAns = await inquirer.prompt(

    [

      {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw cash", "Check Balance"]
      }
    ]
  );

  console.log(operationAns);

  if (operationAns.operation === "withdraw cash") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdrawMethod",
        type: "list",
        message: "Select a withdraw method",
        choices: ["Fast Cash", "Enter Amount"]
      }

    ])
    if (withdrawAns.withdrawMethod === "Fast Cash") {
      let fastcashAns = await inquirer.prompt([
        {
          name: "fastcash",
          type: "list",
          message: "Select Amount:",
          choices: [3000, 5000, 7000, 9000, 12000]

        }
      ]);
      if (fastcashAns.fastcash > myBalance) {
        console.log("Insufficient Balance");

      }
      else {
        myBalance -= fastcashAns.fastcash;
        console.log(`${fastcashAns.fastcash} withdraw Sucessfully`)
        console.log(`Your Remaining Balance is: ${myBalance}`);
      }

    }

    else if (withdrawAns.withdrawMethod === "Enter Amount") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          type: "number",
          message: "Enter the amount to withdraw:"
        }
      ])

      if (operationAns.amount < myBalance) {
        console.log("Insufficient Balance");
      }
      else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw sucessfully`);

      }
    }
    

  }else if (operationAns.operation === "Check Balance") {
    console.log(`Your Acount balance is: ${myBalance}`);
  }
}
else {
  console.log("Pin is Incorrect, Try again!");
}