"use strict";
let user;
user = {
    name: 'John',
    age: 34,
    great(phrase) {
        console.log(phrase + '' + this.name);
    }
};
user.great('hi hello world');
