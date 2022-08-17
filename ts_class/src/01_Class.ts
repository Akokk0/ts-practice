class Person{
    name: string = '孙悟空'
    static age: number = 18
}

class Car{
    readonly name:string = '蓝宝坚尼'
    static date:string = '2000'
}

const p = new Person()
const c = new Car()

console.log(Person)
console.log(p)
console.log(Car)
console.log(c)
