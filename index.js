const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;

// Code your solution here
function batteries(total, batchNumber) {

    total += batchNumber;
    totalBatteries = total;
    debugger
    return total;
}

console.log(batteryBatches.reduce(batteries, 0))
console.log(totalBatteries);    