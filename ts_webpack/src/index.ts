import {m1} from './m'

const a = 1
const b = 2

const c = {name: 'zs', age: 18}

console.log('Hello TS')

function sum(a: number, b: number): number {
    return a + b
}

c.age = 20

console.log(a)
console.log(b)
console.log(c)
console.log(sum(123, 456))
console.log('peiqi')
console.log(m1)
console.log(Promise)
