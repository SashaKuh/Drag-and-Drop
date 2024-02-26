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


// type Combat = number | string;

// function combine(a: Combat, b: Combat) {
//     let res;
//     if (typeof a === 'number' && typeof b === 'number') {
//         res = a + b;
//     } else {
//         res = a.toString() + b.toString();
//     }
//     return res;
// }

// const comb = combine('Sasha', 'Nastya')
// console.log(comb);

// const com = combine(1, 2)
// console.log(com);

// type User = { name: string } | string;
// let u1: User = { name: 'Max' };

// u1 = 'Michael';

// const app = (a: number): void  => {
//     a = 10
//     console.log(a);
// }

// let value = 5;
// console.log(value);
// app(value);
// console.log(value);


// Class ----------------------------------------------------------------

// class Department {
//     name: string;

//     constructor(n: string) {
//         this.name = n;
//     }

//     describe() {
//        console.log('Describe: ' + this.name);
//    }
// }

// const accaunting = new Department('Accounting')
// console.log(accaunting);

// accaunting.describe()


// Interface ----------------------------------------------------------------

// interface Person{
//     name: string;
//     age: number;

//     great(phrase: string): void;
// }

// let user: Person;

// user = {
//     name: 'John',
//     age: 34,
//     great(phrase) {
//         console.log(phrase + '' + this.name);
//     }
// }
// user.great('hi hello world')

// class People implements Person {
//     name = 'John';
//     age = 34;

//     great(phrase: string): void {
//         console.log(phrase + ' ' + this.name);
//     }
// }

// const people = new People
// people.great('hi hello world')



// Advanced types ----------------------------------------------------------------

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type Combat = Admin & Employee

const combain: Combat = {
    name: 'Combat',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

const add = (a: Combinable, b: Combinable) => {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + a
}

type UnknownEmployee = Employee | Admin

const printEmployeeInformation = (emp: UnknownEmployee) => {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) { 
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(combain)


class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vihicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVihivle (vih: Vihicle) {
    vih.drive()
    if (vih instanceof Truck) { 
        vih.loadCargo(1000)
    }
}

useVihivle(v1)
useVihivle(v2)


interface Bird{
    type: 'bird';
    flyingSpeed: number
}

interface Horse{
    type: 'horse';
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log(speed);
}

moveAnimal({type: 'bird', flyingSpeed: 1000})



// const userInput = <HTMLInputElement>document.getElementById('user-input')!
const userInput = document.getElementById('user-input')! as HTMLInputElement



interface ErrorConteainer{
    [prop: string]: string
}

const errorBag: ErrorConteainer = {
    email: 'Not a valid email!',
    username:'Must start with a capital character!'
}


