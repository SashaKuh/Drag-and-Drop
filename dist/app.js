"use strict";
class People {
    constructor() {
        this.name = 'John';
        this.age = 34;
    }
    great(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
const people = new People;
people.great('hi hello world');
