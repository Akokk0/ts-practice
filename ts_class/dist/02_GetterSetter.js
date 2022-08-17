"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*// 定义方法，用来获取name属性
        getName() {
            return this._name
        }

        setName(name: string) {
            this._name = name
        }

        getAge() {
            return this._age
        }

        setAge(age: number) {
            if (age >= 0) {
                this._age = age
            }
        }*/
        // TS中设置getter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const p = new Person('孙悟空', 18);
    console.log(p.name);
    p.age = 20;
    console.log(p);
})();
