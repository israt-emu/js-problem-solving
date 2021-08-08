function centimeterToMeter(centimeter){
    let meter = centimeter  / 100;
    return meter;
}
const centimeter = 23;
const meterConversion = centimeterToMeter(centimeter);
console.log(centimeter, "centimeter is equivalent to", meterConversion, "meter");