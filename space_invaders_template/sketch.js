class GameObject
{
  constructor(x, y, width, height)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  move()
  {
    // The GameObject will not move itself, so let's leave it empty;
  }

  draw()
  {
    // Draw a Red Circle to represent a GameObject.
    fill('red');
    rect(this.x, this.y, this.width, this.height);
  }
}