class PlayerArrow{

    constructor(a,b,c,d){
    
    var  options = {
    
    isStatic: true,
    restitution: 0.8,
    friction: 1,
    density: 1
    }
    
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
    
    this.body = Bodies.rectangle(a, b, c, d, options)
    this.image = loadImage("assets/arrow.png")
    World.add(world, this.body)
    }
    
    shoot(archerAngle){
    var velocity = p5.vector.fromAngle(archerAngle)
    velocity.mult(20)
    Matter.Body.setStatic(this.body, false)
    Matter.Body.setVelocity(this.body, {x:velocity.x, y:velocity.y})
    }

    display(){
    var pos = this.body.position
    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
    pop()
    }
    }