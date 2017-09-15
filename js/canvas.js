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


// var img = new Image();
// img.src = 'img.png';

// context.drawImage(img, 0, 0);

var x = 0,
  speed = 10,
  direction = 1;

function draw() {
  x += speed * direction;
  if (x > canvas.width - 100) {
    direction = -1;
  } else if (x < 0) {
    direction = 1;
  }

  context.beginPath();
  context.rect(x, canvas.height/2, 100, 20);
  x++;
  context.fillStyle = "green";
  context.fill();
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  draw();
}

setInterval(animate, 1000/30);
