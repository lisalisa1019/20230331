let points =[[1,11], [4,10], [7,10], [11,9], [13,8], [15,5], [15,3], [16,1], [16,-1], [15,-1],
  [11,1], [9,2], [7,1], [5,-1], [1,-1], [0,0], [3,1], [1,1], [-2,0], [-6,-2],
  [-9,-6], [-9,-7], [-7,-9], [-7,-11], [-8,-12], [-9,-11], [-11,-10], [-13,-11],
  [-15,-11], [-17,-12], [-17,-10], [-15,-7], [-12,-6], [-11,-6], [-10,-3], [-8,2],
  [-5,6], [-3,9], [-4,10], [-5,10], [-2,12], [1,11]
];
let polygon = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < points.length; i++) {
    let p = createVector(points[i][0], points[i][1]);
    p.mult(20);
    polygon.push(p);
  }
}

function draw() {
  background(255);
  translate(width/3, height/2);

  let mouseXpos = mouseX - width/3; // 計算滑鼠位置相對於多邊形的x座標
  let mouseYpos = height/2 - mouseY; // 計算滑鼠位置相對於多邊形的y座標
  
  let scaleAmount = map(mouseXpos, -width/3, width/3, 0.5, 2); // 計算放大縮小倍率，依據滑鼠位置
  let flipY = mouseYpos < 0 ? -1 : 1; // 如果滑鼠位置在多邊形的上方，就將Y軸方向反轉
  
  for (let i = 1; i <= 5; i++) {
    push();
    scale(i/6 * scaleAmount);
    scale(1, -1);
   
    strokeWeight(4);

    for (let j = 0; j < polygon.length-1; j++) {
      let from = color(255,0,0);
      let to = color(0,0,255);
      stroke(lerpColor(from, to, j/polygon.length));
      line(polygon[j].x, polygon[j].y, polygon[j+1].x, polygon[j+1].y);
    }
    pop();
  }
push();
scale(scaleAmount);
textSize(40);
textAlign(CENTER, CENTER);
fill(96, 0, 162);
noStroke();
text("教科系",-50,0);
pop();
}
