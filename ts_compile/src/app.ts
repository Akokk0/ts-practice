// 这是一条注释
console.log('hello')
let b = 6

// 隐式any不允许
function fn(a: number, b: number) {
    return a + b
}

function fn2() {
    // 不明确的this不允许
    // alert(this)
}

const app = document.getElementById('#app')
// 此处app有可能为空值，所以编译不通过
/*if (app) {
    app.addEventListener('click', () => {
        alert('app')
    })
}*/
// ES6语法，如果对象不为空则执行后方代码
app?.addEventListener('click', () => {
    alert('app')
})

