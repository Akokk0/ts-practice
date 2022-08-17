// 当声明变量为object时，可以为任意对象，因为在JS里，万物皆对象
var a;
a = {};
a = function () {
};
// {} 可以用字面量来限制
var b;
b = { name: '孙悟空', age: 18 };
// 在属性名后加上？，表示属性是可选的
var c;
c = { name: '猪八戒' };
// 使用[变量名: 数据类型]: 数据类型 可以为可变参数
// let d: {name: string, [propName: string]: any}
var d;
d = { name: '唐僧', age: 18, gender: '男' };
var e;
e = function (n1, n2) {
    return n1 + n2;
};
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
var f;
f = ['a', 'b', 'c', 'd'];
// number[] 表示数值数组
var g;
var h;
h = [1, 2, 3, 4, 5];
/**
 * 元组，固定长度的数组
 *  语法：[数据类型, 数据类型]
 */
var i;
i = ['hello', 'ts'];
/**
 * enum 枚举
 *
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var j;
j = { name: '孙悟空', gender: Gender.Male };
console.log(j.gender === Gender.Male);
