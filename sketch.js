function preload(){
  // put preload code here
}

var myBubble= [];
var myColors = ['#B3B3B3', '#5E5E5E', '#424242'];

function setup() {
  frameRate(10);
  createCanvas(600,600);
  for(var i = 0; i<5; i++){
  var b = new Bubble(random(width), random(height), random(0, 30));
  myBubble.push(b);
  }
  // put setup code here
}

function draw() {
  background(0);

  for(var i=0; i<myBubble.length; i++){
    myBubble[i].rollover(mouseX,mouseY);
    myBubble[i].move();
    myBubble[i].display();
  }
  // put drawing code here
}

function Bubble(_x,_y,_r){
  this.x = _x;
  this.y = _y;
  this.r = _r;
  this.brightness = 0;

this.rollover = function(_px, _py)  {
    var d = dist(_px,_py, this.x, this.y);
    if(d< this.r){
      this.brightness = 255;
      var c = new Bubble(this.x + random(-60,60), this.y + random(-60,60), random(0,30));
      myBubble.push(c);
    }else{
      this.brightness = 0;
    }
  }

  this.move = function(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  this.display = function(){
	   var s = random(0,myColors.length -1);
      	s = Math.round(s);
      	stroke(myColors[s]);
    strokeWeight(1);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r*2);
    }
  }
