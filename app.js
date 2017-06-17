// let convert = {};
//
// convert.cToF = function(celsius) {
//   if(!Number.isInteger(celsius)) return undefined;
//   return celsius * 9 / 5 + 32;
// }
//
// convert.fToC = function(fahrenheit) {
//   if(!Number.isInteger(fahrenheit)) return undefined;
//   return (fahrenheit - 32) * 5 / 9;
// }

// Another way of writing the same thing:
let convert = {
  cToF: (celcius) => {
    if(!Number.isInteger(celcius)) return undefined;
    return celcius * 9 / 5 + 32;
  },
  fToC: (fahrenheit) => {
    if(!Number.isInteger(fahrenheit)) return undefined;
    return (fahrenheit - 32) * 5 / 9;
  }
};

module.exports = convert;
