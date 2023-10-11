//let theta = 0
let x0 = 200
let y0 = 200
l = 150
let v =1

function x1(theta, l){
  x = x0+ l * sin(theta)
  return x
}

function y1(theta, l){
  y = y0 +l *cos(theta)
  return y
}


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  colorMode(HSL)
  theta =0
   v = 1
  color_no=1
  c=1
}

function draw() {
  background(220);
  x_1 = x1(theta, l)
  y_1 = y1(theta, l)
  line(x0, y0,x_1 ,y_1 )
  ellipse(x_1, y_1, 30, 30)
  fill(color_no, 100, 50) //random(256), random(256))
  if (theta == 90 || theta == -90) {v = -v}
  if (color_no == 256 || color_no == 0) {c = -c}
  theta= theta +v
 
  color_no = color_no +c
  
}