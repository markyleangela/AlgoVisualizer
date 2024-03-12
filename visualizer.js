
 //maximum of 25
 var arr = new Array(25);
 
 for(let i = 0; i < arr.length; i++){
        arr[i] = (Math.floor(Math.random() * 10) + 1);
  }

function randomize(){
  for(let i = 0; i < arr.length; i++){
    arr[i] = (Math.floor(Math.random() * 10) + 1);
  }
}

function draw(canvasID) {
    const canvas = document.getElementById(canvasID);
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      var x = 20;
      
      for(var i = 0; i < arr.length; i++){
        ctx.fillRect(x,10,5,arr[i] * 10)
        x+=10;
      }
    }
}



draw("canvas1");

document.querySelector(".random-button").addEventListener("click" , function(){
  location.reload();
});



//this is how to add canvas in html 
// var canv = document.createElement("canvas");
// canv.setAttribute("id", "canvas2");;
// document.body.appendChild(canv);


// draw("canvas2",20,20, 100);


//var randomButton = document.getElementsByClassName("random-button")[0];
//  randomButton.addEventListener("click", function(){
//    arr = new Array(25);
//    for(let i = 0; i < arr.length; i++){
//      arr[i] = (Math.floor(Math.random() * 10) + 1);
//    }
//    draw("canvas1");
//  })
