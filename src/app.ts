// console.log('hello world!');
// const num = Math.floor(Math.random())
// console.log(Number.isNaN(num));
// const str = 'hello world!'
// console.log(Number.isNaN(str));

// function add (n1: number, n2: number, s1: string, s2: string) {
//     const result = n1 + n2
//     if (result) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// const nunber1 = 3

// add(nunber1, 3, 'hello world', 'world')

// const prop: {
//     name: string;
//     age: number;
//     hobby: string[];
// } = {
//     name: 'nunber1',
//     age: 1,
//     hobby: ['sport', 'read']
// }

// for (const hobb of prop.hobby) {
//     console.log(hobb);
// }


type Combat = number | string;

function combine(a: Combat, b: Combat) {
    let res;
    if (typeof a === 'number' && typeof b === 'number') { 
        res = a + b;
    } else {
        res = a.toString() + b.toString();
    }
    return res;
}

const comb = combine('Sasha', 'Nastya')
console.log(comb);

const com = combine(1, 2)
console.log(com);

type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael';