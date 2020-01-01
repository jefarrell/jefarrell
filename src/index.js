require('./styles/main.scss');


// Adapting Shiffman's coding challenge to vanilla JS & canvas
// https://www.youtube.com/watch?v=QHEQuoIKgNE&t=569s
const utils = {
  maxCount: 750,
  backgroundCol: '#00F',
  strokeCol: '#FFF',
}
// const maxCount = 750;
// const backgroundCol = '#F7F3E7';
// const circleCol = '#000'
const circles = [];

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const w = window.innerWidth;
const h = window.innerHeight;
canvas.width = w;
canvas.height = h;
context.lineWidth = 2;
context.strokeStyle = utils.strokeCol;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1;
    this.growing = true;
  }
  
  grow() {
    if (this.growing) {
      this.r += 0.1;
    }
  }
  
  edges() {
    return (
      this.x + this.r > w || 
      this.x - this.r < 0 || 
      this.y + this.r > h || 
      this.y - this.r < 0      
    );
  }
  
  show() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    context.stroke();
    context.closePath();
  }
}

function newCircle() {
  const randX = getRandomInt(canvas.width);
  const randY = getRandomInt(canvas.height);
  let valid = true;
  circles.forEach((circle) => {
    const d = Math.hypot(circle.x - randX, circle.y - randY);
    if (d < circle.r) {
      valid = false;
      return;
    }
  });
  
  if (valid) {
    return new Circle(randX, randY);
  } else {
    return null;
  }
}




// This post has been so handy
// https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
class AnimationLoop {
  constructor(fps) {
    this.fps = fps;
    this.fpsInterval = null;
    this.then = null;
  }
  
  beginAnimation() {
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.animate();
  }
  
  animate = () => {
    if (circles.length < utils.maxCount) {
      requestAnimationFrame(this.animate);
      const now = Date.now();
      const elapsed = now - this.then;
      if (elapsed > this.fpsInterval) {
        this.then = now - (elapsed % this.fpsInterval);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = utils.backgroundCol;
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        const c = newCircle();
        
        if (c !== null) {
          circles.push(c);
        }

        circles.forEach((circle) => {
          if (circle.growing) {
            if (circle.edges()) {
              circle.growing = false;
            } else {
              for (let c = 0; c < circles.length; c++) {
                if (circle !== circles[c]) {
                  const d = Math.hypot(circle.x - circles[c].x, circle.y - circles[c].y);
                  if (d - context.lineWidth < circle.r + circles[c].r) {
                    circle.growing = false;
                    break;
                  }        
                }
              }
            }
          }
          circle.show();
          circle.grow()
        });
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const Animator = new AnimationLoop(50);
  Animator.beginAnimation();
});
