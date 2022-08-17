"use strict";
/*
function fn(a: any, b:any): any {
    return a
}*/
function fn(a) {
    return a;
}
let result = fn(10);
let result2 = fn('Hello TS');
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
let num = fn3('hello');
console.log(num);
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('孙悟空');
