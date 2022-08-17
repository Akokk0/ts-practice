/*
function fn(a: any, b:any): any {
    return a
}*/

function fn<T>(a: T): T {
    return a
}

let result = fn(10)
let result2 = fn<string>('Hello TS')

function fn2<T, K>(a: T, b: K): T {
    console.log(b)
    return a
}

fn2<number, string>(123, 'hello')

interface Inter{
    length: number
}

function fn3<T extends Inter>(a: T): number {
    return a.length
}

let num = fn3('hello')
console.log(num)

class MyClass<T>{
    name: T
    constructor(name: T) {
        this.name = name
    }
}

const mc = new MyClass<string>('孙悟空')
