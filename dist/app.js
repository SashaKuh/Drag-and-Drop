"use strict";
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
const app = (a) => {
    a = 10;
    console.log(a);
};
let value = 5;
console.log(value);
app(value);
console.log(value);
