// Animated subtle starfield
const canvas = document.getElementById('stars');
const nebula = document.querySelector('.nebula');
let ctx, w, h, stars = [];

function initCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');
  w = canvas.width; h = canvas.height;
  stars = [];
  const count = Math.floor((w*h)/9000);
  for(let i=0;i<count;i++){
    stars.push({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.2 + 0.2,
      vx: (Math.random()-0.5)*0.03,
      vy: (Math.random()*0.2)+0.02,
      alpha: Math.random()*0.8 + 0.2
    });
  }
}
function draw(){
  ctx.clearRect(0,0,w,h);
  for(let s of stars){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,255,'+s.alpha+')';
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
    s.x += s.vx;
    s.y += s.vy;
    if(s.y > h+10){ s.y = -10; s.x = Math.random()*w; }
    if(s.x < -10){ s.x = w+10; }
    if(s.x > w+10){ s.x = -10; }
  }
  requestAnimationFrame(draw);
}

window.addEventListener('resize', ()=>{ initCanvas(); });
initCanvas();
draw();

// subtle nebula movement
let nebX = 0;
function nebulaMove(){
  nebX += 0.1;
  nebula.style.backgroundPosition = (nebX%100) + 'px ' + '0px';
  requestAnimationFrame(nebulaMove);
}
nebulaMove();
