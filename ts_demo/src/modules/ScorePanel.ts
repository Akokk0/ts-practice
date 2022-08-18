// 定义表示计分牌的类
export default class ScorePanel{
    // 用来记录分数和等级
    score = 0
    level = 1

    // 分数和等级所在元素
    scoreElement: HTMLElement
    levelElement: HTMLElement

    // 设置一个变量限制等级
    maxLevel: number
    // 设置一个变量限制多少分升级
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreElement = document.getElementById('score')!
        this.levelElement = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        this.scoreElement.innerHTML = ++this.score + ''
        // 每10分升一级
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = ++this.level + ''
        }
    }

}
