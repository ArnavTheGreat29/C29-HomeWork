class Throw{

    constructor(objectA , objectB){
        var options = {
         bodyA: objectA,
         pointB: objectB,
         length: 10,
         thickness: 5,
         stiffness: 0.5

        }
       this.body =  Matter.Constraint.create(options)
       World.add (world,this.body)
    }
    display(){
if(this.body.bodyA != null){
        var posA = this.body.bodyA.position
        var posB = this.body.pointB

        line (posA.x,posA.y,posB.x,posB.y)
}
    }
fly(){
    this.body.bodyA = null
}
}
