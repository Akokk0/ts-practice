import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类
export default class GameControl{
    // 定义三个属性
    // 蛇
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 按键的值
    keyValue: string = 'ArrowRight'
    // 合法的按键值
    keyCode = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

    // 游戏结束Flag
    isAlive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel(10, 1)
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
        if (this.keyCode.indexOf(event.key) === -1) return
        this.keyValue = event.key
    }

    // 创建一个控制蛇移动的方法
    run() {
        let x = this.snake.X
        let y = this.snake.Y

        switch (this.keyValue) {
            case 'ArrowUp':
                y -= 10
                break
            case 'ArrowDown':
                y += 10
                break
            case 'ArrowLeft':
                x -= 10
                break
            case 'ArrowRight':
                x += 10
                break
        }

        this.checkEat(x, y)

        try {
            this.snake.X = x
            this.snake.Y = y
        } catch (e) {
            alert((e as Error).message)
            this.isAlive = false
        }

        this.isAlive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)

    }

    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            console.log('吃到食物了！')
            this.food.changePosition()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }

}
