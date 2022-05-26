// Code your solution in this file!
const returnFirstTwoDrivers = function(firstDrivers){
    return firstDrivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const returnLastTwoDrivers = function(lastDrivers){
    return lastDrivers.slice(-2);
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers)

function createFareMultiplier(multiplier){
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn){ 
    return driversToReturn(arrayOfDrivers);

}

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers))