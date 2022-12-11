let v = [];
let cols = 600, rows = 30;
let t_D = 180*15 / cols;
let r_D =  1 / rows;
let canvas, opening, vDensity, pAlign, curve1, curve2;

function setup(){
  canvas = createCanvas(700, 700, WEBGL);
  canvas.id('canvas');

  colorMode(HSB);
  angleMode(DEGREES);
  noStroke();

  opening = createSlider(1, 10, 10, 0.1);
  vDensity = createSlider(1, 20, 10, 0.1);
  pAlign = createSlider(0, 6, 3.6, 0.05);
  curve1 = createSlider(-6, 6, 2, 0.1);
  curve2 = createSlider(0.5, 1.5, 1.3, 0.1);

  let ov = 10;
  opening.value(ov);

  let handle = setInterval(() => {
    ov--;
    opening.value(ov);
    if (ov == 3) {
      clearInterval(handle);
      handle = 0;
    }
  }, 25);
}

function draw(){
  clear();
  orbitControl(4, 4);
  rotateY(-10);
  rotateX(-50);
  for(let r = 0; r <= rows; r++){
    v.push([]);
    for(let theta = 0; theta <= cols; theta++){
      let phi = (180/opening.value())*Math.exp(-theta*t_D/(vDensity.value()*180));
      let petalCut = 1 - (1/2) * pow((5/4)*pow(1-((pAlign.value()*theta*t_D%360)/180), 2)-1/4, 2);
      let hangDown = curve1.value()*pow(r*r_D, 2)*pow(curve2.value()*r*r_D-1, 2)*sin(phi);
      let pX = 260 * petalCut * (r*r_D * sin(phi)+hangDown*cos(phi)) * sin(theta*t_D);
      let pY = -260 * petalCut * (r*r_D * cos(phi)-hangDown*sin(phi));
      let pZ = 260 * petalCut * (r*r_D * sin(phi)+hangDown*cos(phi)) * cos(theta*t_D);
      let pos = createVector(pX, pY, pZ);
      v[r].push(pos);
    }
  }
  for(let r = 0; r < v.length; r++){
    fill(340, 100, -20+r*r_D*120);
    for(let theta = 0; theta < v[r].length; theta++){
	     if(r < v.length-1 && theta < v[r].length-1){
         beginShape();
         vertex(v[r][theta].x, v[r][theta].y, v[r][theta].z);
         vertex(v[r+1][theta].x, v[r+1][theta].y, v[r+1][theta].z);
         vertex(v[r+1][theta+1].x, v[r+1][theta+1].y, v[r+1][theta+1].z);
         vertex(v[r][theta+1].x, v[r][theta+1].y, v[r][theta+1].z);
         endShape(CLOSE);
       }
    }
  }
  v = [];
}