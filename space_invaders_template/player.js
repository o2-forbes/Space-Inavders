class Player extends GameObject
{
  isDead = false;

  draw()
  {
    fill('lawngreen');
    triangle(this.x, this.y + this.height, // The first point;
    this.x + this.width / 2, this.y, // The second point;
    this.x + this.width,  this.y + this.height);  // The third point;
  }

  move() {
        let speed = 5;
    
        if (keyIsDown(RIGHT_ARROW) && this.x + this.width < width) {
          this.x += speed;
        } else if (keyIsDown(LEFT_ARROW) && this.x > 0) {
          this.x -= speed;
        }
      }
    }