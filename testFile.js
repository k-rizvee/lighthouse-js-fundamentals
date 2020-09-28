// var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2,1)
console.log(rainbow);
rainbow.splice(2,0,'yellow','green')
console.log(rainbow);
rainbow.splice(rainbow.length,0,'purple')
console.log(rainbow);


