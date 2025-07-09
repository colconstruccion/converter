let numMiles = prompt("How many miles?");
console.log(numMiles);
numMiles = Number(numMiles);
console.log(numMiles);
let kiloValue = numMiles * 1.60934;
console.log(kiloValue);
let message = `${numMiles} miles is equal to ${kiloValue} kilometers`;
console.log(message);
