/*console.log('Hello TS')*/

// any类型不仅祸害自己，还会污染其他变量
let a: any
a = true

let b: string = 'Hello TS'

// any类型不仅祸害自己，还会污染其他变量
b = a
console.log(b)

// unknown是类型安全的any
let c: unknown

c = 'true'

// 类型断言
/**
 * 语法:
 *  变量 as 类型
 *  <类型>变量 有点类似泛型
 */
b = c as string
b = <string>c

function fn(): void {
    //没有返回值
    /**
     * return
     * return undefined
     * return null
     * 都可以
     */
}

// never 表示永远不会返回结果
function fn2(): never {
    // 一般用于报错
    throw new Error('报错了！')
}
