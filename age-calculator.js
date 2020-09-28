function ageCalculator(name, dob, currYear){
  return (name + ' is ' + String(currYear - dob) + ' years old.')
}

console.log(ageCalculator("Suzie", 1983, 2015));

// "Suzie is 32 years old."
// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));