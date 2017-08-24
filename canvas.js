function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

let untangleGame = {
    circles: []
}

let drawCircle  = (context, x, y, radius) => {
    context.fillStyle = 'rgba(200,200,100,0.9)';
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
}

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

//setting dynamic height and width of the canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let circleRadius = 10;
var circlesCount = 5;

//generating random circles 'circlesCount' times 
for(let index = 0; index < circlesCount; index++){
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    drawCircle(context, x, y, circleRadius);
    untangleGame.circles.push(new Circle(x,y,circleRadius));
}

