"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Go no value.';
    if (element.length === 1) {
        descriptionText = 'Go 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Go ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
function extreactAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extreactAndConvert({ name: 'Max' }, 'name');
