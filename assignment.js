// #Problem-1: CONVERTER TO CHANGE FEET TO MILE
function feetToMile(feet) {
  let mile = feet * 0.000189394;
  mile = mile.toFixed(8);
  return mile;
}
console.log("Mile = ", feetToMile(10));

// #Problem-2: WOOD CALCULATOR
function woodCalculator(chair, table, bed) {
    forChair = chair * 1;
    forTable = table * 3;
    forBed = bed * 5;
    let totalNeedWood = forChair + forTable + forBed;
    return totalNeedWood;
}
console.log("You nedd ", woodCalculator(28, 32, 42), "Cubic Feet Wood.");

// #Problem-3: BRICKS CALCULATOR
function brickCalculator(floors) {
    if (floors <= 0) {
        return "Please enter an valid floors numbers!"
    } else if (floors <= 10) {
        let floorsToFeet = floors * 15;
        let feetToBricks = floorsToFeet * 1000;
        return feetToBricks;
    } else if (floors > 10 && floors <= 20) {
        let totalFloors = floors;
        let firstTenFloors = 10;
        let theRestOfTheFloors = totalFloors - firstTenFloors;
        let firstTenFloorsToFeet = firstTenFloors * 15;
        let firstTenFloorsFeetToBricks = firstTenFloorsToFeet * 1000;
        let theRestOfTheFloorsToFeet = theRestOfTheFloors * 12;
        let theRestOfTheFloorsFeetToBricks = theRestOfTheFloorsToFeet * 1000;
        let totalBricksNeeded = firstTenFloorsFeetToBricks + theRestOfTheFloorsFeetToBricks;
        return totalBricksNeeded;
    } else if (floors > 20) {
        let totalFloors = floors;
        let firstTenFloors = 10;
        let temporaryTenFloors = totalFloors - firstTenFloors;
        let theRestOfTheFloors = temporaryTenFloors - 10;
        let secondTenFloors = temporaryTenFloors - theRestOfTheFloors;
        let firstTenFloorsToFeet = firstTenFloors * 15;
        let firstTenFloorsFeetToBricks = firstTenFloorsToFeet * 1000;
        let secondTenFloorsToFeet = secondTenFloors * 12;
        let secondTenFloorsFeetToBricks = secondTenFloorsToFeet * 1000;
        let theRestOfTheFloorsToFeet = theRestOfTheFloors * 10;
        let theRestOfTheFloorsFeetToBricks = theRestOfTheFloorsToFeet * 1000;
        let totalBricksNeeded = firstTenFloorsFeetToBricks + secondTenFloorsFeetToBricks + theRestOfTheFloorsFeetToBricks;
        return totalBricksNeeded;
    }
}
console.log("You need ", brickCalculator(28), " Bricks.");
