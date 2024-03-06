
var arr = [1,2,4,2,5,1,2]
function draw(canvasID) {
    const canvas = document.getElementById(canvasID);
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
        var x = 20;
      for(var i = 0; i < arr.length; i++){
        ctx.fillRect(x,20,50,arr[i] * 100)
        x+=80;
      }
    }
  }


draw("canvas1");

//this is how to add canvas in html 
// var canv = document.createElement("canvas");
// canv.setAttribute("id", "canvas2");;
// document.body.appendChild(canv);


// draw("canvas2",20,20, 100);
