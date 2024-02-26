"use strict";
const combain = {
    name: 'Combat',
    privileges: ['create-server'],
    startDate: new Date()
};
const add = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + a;
};
const printEmployeeInformation = (emp) => {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
};
printEmployeeInformation(combain);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVihivle(vih) {
    vih.drive();
    if (vih instanceof Truck) {
        vih.loadCargo(1000);
    }
}
useVihivle(v1);
useVihivle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log(speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 1000 });
const userInput = document.getElementById('user-input');
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
