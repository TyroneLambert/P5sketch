let x;
let y;
let r = 100;

let bounce=false;


let ball ;

function Ball(x,y,r){
    this.x=x;
	this.y=y;
	this.r=r;
	this.d = 2*r;
    this.velX=2.5; 
    this.velY=2.1;
    this.gX=0
    this.gY=0.2;


	this.show=function(){
	    strokeWeight(3);
		fill(204, 102, 0);
		stroke("#fff")
		ellipse(this.x,this.y,this.d,this.d)
        noFill();
        arc(this.x, this.y, this.d/2, this.d-1.5, PI / 2, 3 * PI / 2, OPEN);
        arc(this.x, this.y, this.d-1.5, 1, 0, PI , OPEN);
      
        arc(this.x+this.r-4*PI, this.y, this.d/2.5, this.d/2, PI / 2,  3 * PI / 2, OPEN);
      
	}
    
    this.bounce=function(width,height){
      
          this.x += this.velX;
          this.y += this.velY;
          this.velX += this.gX;
          this.velY += this.gY;
          
          if((this.x > width) || (this.x<0)){
              this.velX *= -1;
          }
          if(this.y>height){
              this.velY *= -0.95;
              this.y = height;
          }
    
    }

}

function setup() {
  createCanvas(800, 800);
   x=width/2;
  y=height/2;
  ball = new Ball(x,y,r);
  

   
}


function mousePressed(){

  var d = dist(mouseX,mouseY,x,y)
  
  if(d<r){
    bounce=true;
  }

}

function draw() {
 background("#5DADE2");
 ball.show();
  
  if(bounce){
  
    ball.bounce(width,height);
  
  }
  noStroke()
 fill(255,255,0,200); //white, semi-transparent
 ellipse(mouseX+20,mouseY+20,20,20); // follows the mouse,

}
