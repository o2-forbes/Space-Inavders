class Enemy extends GameObject 
{
    isDead = false;

    draw()
  {
    fill(0,191,255);
    rect(this.x(random(100)), this.y(random(100)), this.width(200), this.height(40));
  }

  move() 
  {
    
  }
}