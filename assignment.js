// CONVERTER TO CHANGE FEET TO MILE
function feetToMile(feet) {
  let mile = feet * 0.000189394;
  mile = mile.toFixed(8);
  return mile;
}
console.log("Mile = ", feetToMile(10));
