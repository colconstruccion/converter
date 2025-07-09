let numMiles = prompt("How many miles?");
console.log(numMiles);
numMiles = Number(numMiles);
console.log(numMiles);
let kiloValue = numMiles * 1.60934;
console.log(kiloValue);
let message = `${numMiles} miles is equal to ${kiloValue} kilometers`;
console.log(message);

//lesson 19
/*let checkNum = 5;
if (checkNum > 10){
    console.log("Yes, greater than 10");
}
else if (checkNum == 50){
    console.log("It's equal to 50");
}
else if(checkNum === 5){
    console.log("Yes, it's equal to 5");
}else{
    console.log("the number is "+checkNum);
}

console.log(checkNum);
*/