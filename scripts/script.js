console.log("Hello");

let canvas = document.getElementsByTagName("canvas")[0];
let height = canvas.height;
let width = canvas.width;
let ctx = canvas.getContext("2d");

const SIZE = 10;
function drawRect(x, y) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, SIZE, SIZE);   
}

let food = {
    x: 0,
    y: 0
};

console.log(food);

function addFood() {
    let xVal = Math.floor(Math.random() * width / SIZE) * SIZE;
    console.log(xVal);
    
    let yVal = Math.floor((Math.random() * width) / SIZE) * SIZE;
    console.log(yVal);

    food = {
        x: xVal,
        y: yVal
    }
};

addFood(1, 2);
console.log(food);
drawRect(food.x, food.y);

let snake = [];
function addSnake(xVal, yVal) {
    snake.push({
        x: xVal,
        y: yVal
    })
}

console.log(snake)
addSnake(0,0)