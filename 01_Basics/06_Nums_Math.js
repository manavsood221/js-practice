const score1 = 400; 
// console.log(score1);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1123.43
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000000;
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++ Maths ++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); //change negative to positive but positive remains the same
// console.log(Math.round(4.7));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.7));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);

const min = 1;
const max = 6;


//important *********
console.log(Math.floor(Math.random() * (max - min + 1)) + min);