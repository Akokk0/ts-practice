// 引入样式
import './style/index.less'
/*import Food from "./modules/Food";
import ScorePanel from "./modules/ScorePanel";*/

/*
// 测试代码
const food = new Food()
console.log(food.X, food.Y)
food.changePosition()
console.log(food.X, food.Y)

// 测试代码
const sp = new ScorePanel(100, 2)
for (let i = 0; i < 16; i++) {
    sp.addScore()
}
*/

import GameControl from "./modules/GameControl";

const gc = new GameControl()
gc.init()

/*setInterval(() => {
    console.log(gc.keyValue)
}, 1000)*/
