"use strict";
class Person {
    constructor() {
        this.name = '孙悟空';
    }
}
Person.age = 18;
class Car {
    constructor() {
        this.name = '蓝宝坚尼';
    }
}
Car.date = '2000';
const p = new Person();
const c = new Car();
console.log(Person);
console.log(p);
console.log(Car);
console.log(c);
