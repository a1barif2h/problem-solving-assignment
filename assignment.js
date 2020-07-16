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
