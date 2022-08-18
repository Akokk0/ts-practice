// 定义食物类 Food
export default class Food{
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement

    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!
    }

    // 定义获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft
    }

    // 定义获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop
    }

    //修改食物的位置
    changePosition() {
        // 生成一个随机的位置
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }

}
