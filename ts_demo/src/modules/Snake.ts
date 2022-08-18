export default class Snake{
    // 表示蛇的元素
    head: HTMLElement
    // 蛇的身体
    bodies: HTMLCollectionOf<HTMLElement>
    // 蛇的容器
    element: HTMLElement

    constructor() {
        this.head = document.querySelector('#snake > div')!
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取蛇的坐标（蛇头坐标）
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value) {
        if (this.X === value) return
        if (value < 0 || value > 290) throw new Error('蛇撞墙了！')

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        this.moveBody()

        this.head.style.left = value + 'px'

        this.checkHeadBody()
    }

    set Y(value) {
        if (this.Y === value) return
        if (value < 0 || value > 290) throw new Error('蛇撞墙了！')

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody()

        this.head.style.top = value + 'px'

        this.checkHeadBody()
    }

    // 蛇增加身体的方法
    addBody() {
        // 向element中添加一个div
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (<HTMLElement>this.bodies[i]).style.left = x + 'px';
            (<HTMLElement>this.bodies[i]).style.top = y + 'px';
        }
    }

    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            if (this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop) {
                throw new Error('撞到自己了！')
            }
        }
    }

}
