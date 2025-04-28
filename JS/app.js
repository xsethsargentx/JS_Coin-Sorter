// //! Coin Values
// const coinsValue = {
//     "penny" : 0.01,
//     "nickel" : 0.05,
//     "dime" : 0.1,
//     "quarter" : 0.25,
//     "half dollar" : 0.5,
// }

// //! Wrapper Capacities
// const wrapperCapacity = {
//     "penny" : 50,
//     "nickel" : 40,
//     "dime" : 50,
//     "quarter" : 40,
//     "half dollar" : 20,
// };

// //! Input: # of coins (THESE ARE CHANGABLE)
// //? This object will be used to count the number of coins to be sorted
//     // let pennies = parseInt(prompt("Enter the number of pennies:"));
//     // let nickels = parseInt(prompt("Enter the number of nickels:"));
//     // let dimes = parseInt(prompt("Enter the number of dimes:"));
//     // let quarters = parseInt(prompt("Enter the number of quarters:"));
//     // let halfDollars = parseInt(prompt("Enter the number of half-dollars:"));

//     let pennies = 123;
//     let nickels = 222;
//     let dimes = 333;
//     let quarters = 23;
//     let halfDollars = 12;

// //! Function to calculate the total coin value and wrapper count
// function calculateCoins(pennies, nickels, dimes, quarters, halfDollars) {
//     //? Calculate the total value
//     const totalValue = 
//         (pennies * coinsValue.penny) +
//         (nickels * coinsValue.nickel) +
//         (dimes * coinsValue.dime) +
//         (quarters * coinsValue.quarter) *
//         (halfDollars * coinsValue["half dollar"]);

//     //? Calculate the # of wrappers needed
//     const wrappers = {
//         pennies: Math.floor(pennies / wrapperCapacity.penny),
//         nickels: Math.floor(nickels / wrapperCapacity.nickel),
//         dimes: Math.floor(dimes / wrapperCapacity.dime),
//         quarters: Math.floor(quarters / wrapperCapacity.quarters),
//         halfDollars: Math.floor(halfDollars / wrapperCapacity["half dollar"]),
//     };

// // Output results
// // alert(`Total value: $${totalValue.toFixed(2)}\n\nWrappers needed:\nPennies: ${wrappers.pennies}\nNickels: ${wrappers.nickels}\nDimes: ${wrappers.dimes}\nQuarters: ${wrappers.quarters}`);

//     // debugger
//     //? Outputting results to the console
//     console.log(`Total Value: $${totalValue.toFixed(2)}`);
//     console.log(`Wrappers Needed: ${wrappers.pennies + wrappers.nickels + wrappers.dimes + wrappers.quarters + wrappers.halfDollars}`);
//     console.log(`Pennies: ${wrappers.pennies}`);
//     console.log(`Nickels: ${wrappers.nickels}`);
//     console.log(`Dimes: ${wrappers.dimes}`);
//     console.log(`Quarters: ${wrappers.quarters}`);
//     console.log(`Half Dollars: ${wrappers.halfDollars}`);
// }

// calculateCoins(pennies, nickels, dimes, quarters, halfDollars);


//! 1. Define Variables for Coins
let pennies = 555;
let nickels = 345;
let dimes = 963;
let quarters = 234;

// 2. Calculate Total Value of Coins
let valuePennies = pennies * 0.01;
let valueNickels = nickels * 0.05;
let valueDimes = dimes * 0.10;
let valueQuarters = quarters * 0.25;

let totalValue = valuePennies + valueNickels + valueDimes + valueQuarters;

//! 3. Sort Coins into Wrappers
// Wrapper capacities
const wrapperCapacity = {
  pennies: 50,
  nickels: 40,
  dimes: 50,
  quarters: 40
};

// Calculate wrappers needed and remaining coins
let wrappersPennies = Math.floor(pennies / wrapperCapacity.pennies);
let remainingPennies = pennies % wrapperCapacity.pennies;

let wrappersNickels = Math.floor(nickels / wrapperCapacity.nickels);
let remainingNickels = nickels % wrapperCapacity.nickels;

let wrappersDimes = Math.floor(dimes / wrapperCapacity.dimes);
let remainingDimes = dimes % wrapperCapacity.dimes;

let wrappersQuarters = Math.floor(quarters / wrapperCapacity.quarters);
let remainingQuarters = quarters % wrapperCapacity.quarters;

//! 4. Output Results
console.log("Wrappers Needed:");
console.log(`Pennies: ${wrappersPennies} wrapper(s), ${remainingPennies} loose coin(s)`);
console.log(`Nickels: ${wrappersNickels} wrapper(s), ${remainingNickels} loose coin(s)`);
console.log(`Dimes: ${wrappersDimes} wrapper(s), ${remainingDimes} loose coin(s)`);
console.log(`Quarters: ${wrappersQuarters} wrapper(s), ${remainingQuarters} loose coin(s)`);

console.log(`\nTotal Value: $${totalValue.toFixed(2)}`);