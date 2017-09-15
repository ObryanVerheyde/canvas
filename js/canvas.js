var canvas = document.getElementById('draw');
var context = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

// canvas.style.width = '100%';
// canvas.style.backgroundColor = 'yellow';

context.rect(100, 200, 50, 20);
context.fillStyle = "red";
context.fill();

context.beginPath();
context.fillStyle = 'yellow';
context.arc(60, 60, 50, 0, 2*Math.PI, false);
context.fill();

context.beginPath();
context.moveTo(150, 200);
context.lineTo(100, 100);
context.strokeStyle = 'black';
context.lineWidth = 5;
context.stroke();
