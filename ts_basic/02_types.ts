// 当声明变量为object时，可以为任意对象，因为在JS里，万物皆对象
let a: object
a = {}
a = function () {

}

// {} 可以用字面量来限制
let b: {name: string, age: number}
b = {name: '孙悟空', age: 18}

// 在属性名后加上？，表示属性是可选的
let c: {name: string, age?: number}
c = {name: '猪八戒'}

// 使用[变量名: 数据类型]: 数据类型 可以为可变参数
// let d: {name: string, [propName: string]: any}
let d: {name: string, [propName: string]: any}
d = {name: '唐僧', age: 18, gender: '男'}

let e: (a: number, b: number) => number
e = function (n1: number, n2: number): number {
    return n1 + n2
}
// 或简写为
/*e = function (n1, n2) {
    return n1 + n2
}*/

/**
 * 数组表示方式：
 *  数据类型[]
 *  Array<数据类型>
 */
// string[] 表示字符串数组
let f: string[]
f = ['a', 'b', 'c', 'd']

// number[] 表示数值数组
let g: number[]

let h: Array<number>
h = [1, 2, 3, 4, 5]

/**
 * 元组，固定长度的数组
 *  语法：[数据类型, 数据类型]
 */
let i: [string, string]
i = ['hello', 'ts']

/**
 * enum 枚举
 *
 */
enum Gender{
    Male,
    Female
}

let j: {name: string, gender: Gender}
j = {name: '孙悟空', gender: Gender.Male}

// console.log(j.gender === Gender.Male)

// 表示string或number
// let k: string | number
// 表示同时为string和number，但这里为语义错误
// let k: string & number
// 正确用法
let k: {name: string} & {age: number}
k = {name: '孙悟空', age: 18}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let l: myType
let m: myType
let n: myType

l = 1
m = 3
n = 5
