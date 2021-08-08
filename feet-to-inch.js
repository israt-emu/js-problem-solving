function feetToInch(feet){
    let inch = feet  * 12;
    return inch;
}
const feet = 4;
const inchConversion = feetToInch(feet);
console.log("The inch value of given feet", feet, "is", inchConversion); 