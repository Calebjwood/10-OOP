const Triangle = require('./Triangle')
const Square = require('./Square')
const Circle = require('./Circle');




   function determineShape(shapeType, color){
        if( shapeType === 'Triangle'){
            const shape = new Triangle();
            shape.setColor(color)
            return shape.render()
        }
        else if(shapeType === 'Square'){
            const shape = new Square()
            shape.setColor(color)  
            return shape.render()
        }
        else{
            const shape = new Circle()
            shape.setColor(color)
            return shape.render()
        }
    }
    


module.exports = determineShape;