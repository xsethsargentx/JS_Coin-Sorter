//! 1. Define Variables for Coins
//? Input Coin Values:
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
//? Wrapper Capacities
const wrapperCapacity = {
  pennies: 50,
  nickels: 40,
  dimes: 50,
  quarters: 40
};

//? Calculate wrappers needed and remaining coins
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