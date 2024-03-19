
 //maximum of 25
 var arr = new Array(25); // store values of each bar
 var allBar = []; // store all bars

function randomize(){
  for(let i = 0; i < arr.length; i++){
    arr[i] = (Math.floor(Math.random() * 10) + 1);
  }
}
randomize();

const canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

class Bar {
  constructor(xpos, ypos =10, w, h, speed){
    this.xpos = xpos;
    this.ypos = ypos;
    this.h = h;
    this.speed = speed;
    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
  }

  draw(ctx){
    ctx.fillRect(this.xpos, this.ypos, 5, this.h);
  }

  update(){
    ctx.clearRect(0,0, 500, 850);
    this.draw(ctx);

    this.xpos += this.dx;
    // this.ypos += this.dy;
  }
}


// function drawAll(){
//   var x = 20;
//   for(let i = 0; i < arr.length; i ++){
//     var bar = new Bar(x, 10, 5, arr[i] * 10);
//     allBar.push(bar);
//     bar.draw(ctx);
//     x+=10;
    
//   }
// }

// drawAll();


var bar = new Bar(10, 10, 5, 50, 1);
var bar2 = new Bar(20, 100, 5, 50, 1);
bar.draw(ctx);
bar2.draw(ctx);

let updateRect = function(){
  requestAnimationFrame(updateRect);
  bar.update();
}

updateRect();






document.querySelector(".random-button").addEventListener("click" , function(){
  location.reload();
});
