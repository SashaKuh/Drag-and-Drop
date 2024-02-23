"use strict";
// console.log('hello world!');
// const num = Math.floor(Math.random())
// console.log(Number.isNaN(num));
// const str = 'hello world!'
// console.log(Number.isNaN(str));
function combine(a, b) {
    let res;
    if (typeof a === 'number' && typeof b === 'number') {
        res = a + b;
    }
    else {
        res = a.toString() + b.toString();
    }
    return res;
}
const comb = combine('Sasha', 'Nastya');
console.log(comb);
const com = combine(1, 2);
console.log(com);
let u1 = { name: 'Max' };
u1 = 'Michael';
